// Offline data, script-order and feed regression checks.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
process.chdir(path.resolve(__dirname, '..'));

const html = fs.readFileSync('index.html', 'utf8');
for (const [, body] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(body);
const refs = [...html.matchAll(/<script src="([^"?]+)\?v=([^"]+)"/g)];
assert.equal(new Set(refs.map(match => match[2])).size, 1);
const storage = new Map();
function load(hostname = 'localhost') {
  const context = vm.createContext({location: {hostname}, window: {addEventListener() {}},
    sessionStorage: {getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value)}});
  for (const [, file] of refs) vm.runInContext(fs.readFileSync(file, 'utf8'), context, {filename: file});
  return context.window;
}
const {KARTEN: cards, HARMONY_QUIZ: quiz, MUSIC_FEED: feed} = load();
assert.equal(new Set(cards.map(card => card.category)).size, 2);
for (let i = 1; i < cards.length; i++) assert.notEqual(cards[i - 1].kind, cards[i].kind);
const videos = cards.filter(card => card.kind === 'unesco-video');
assert.ok(videos.length > 200);
assert.equal(new Set(videos.map(card => card.media[0].id)).size, videos.length);
for (const [ref, wrongId] of [['00005','B3-IkdWzNBs'], ['00111','IgZV9nR-m2o']]) {
  const films = videos.filter(card => card.sources[0].url.endsWith('/' + ref));
  assert.ok(films.length && films.every(card => card.media[0].id !== wrongId));
}
for (const card of videos) {
  assert.equal(card.media.length, 1);
  assert.match(card.media[0].id, /^[\w-]{11}$/);
  assert.match(card.sources[0].url, /^https:\/\/ich\.unesco\.org\/en\//);
  assert.equal(card.detail.length, 0);
  assert.equal(card.summary, undefined);
}
const seen = new Set();
let last;
for (let i = 0; i < videos.length; i++) {
  assert.equal(feed.nextRedditCard().kind, 'harmony-quiz');
  last = feed.nextRedditCard().media[0].id;
  seen.add(last);
}
assert.equal(seen.size, videos.length);
feed.nextRedditCard();
assert.notEqual(feed.nextRedditCard().media[0].id, last);

const ids = new Set();
let nextId = feed.nextQuizId;
for (let i = 0; i < 4356; i++) {
  if (i === 49) nextId = load().MUSIC_FEED.nextQuizId;
  last = nextId();
  ids.add(last);
}
assert.equal(ids.size, 4356);
assert.notEqual(nextId(), last);
const labels = new Set();
for (let id = 0; id < 4356; id++) {
  const puzzle = quiz.createPuzzle(id);
  labels.add(puzzle.chords[1].label);
  puzzle.chords.forEach((chord, index) => {
    const voices = puzzle.voices[index];
    assert.equal(voices.length, 4);
    assert.equal(voices[0] % 12, chord.pcs[chord.inversion]);
    assert.equal(new Set(voices.slice(1).map(note => note % 12)).size, 3);
    assert.ok(voices.every(note => chord.pcs.includes(note % 12)));

    if (index === 0) return;
    const previous = puzzle.voices[index - 1];
    const directions = voices.map((note, voice) => Math.sign(note - previous[voice]));
    for (let lower = 0; lower < 4; lower++) {
      for (let upper = lower + 1; upper < 4; upper++) {
        if (directions[lower] === 0 || directions[lower] !== directions[upper]) continue;
        const interval = (voices[upper] - voices[lower]) % 12;
        if (interval !== 0 && interval !== 7) continue;
        assert.notEqual((previous[upper] - previous[lower]) % 12, interval,
          `Parallel ${interval === 0 ? 'octave' : 'fifth'} in quiz ${id}, chord ${index} to ${index + 1}, voices ${lower + 1} and ${upper + 1}`);
      }
    }
  });
}
assert.equal(labels.size, 66);
assert.equal(load('www.reddit.com').MUSIC_FEED.isReddit, true);
new vm.Script(fs.readFileSync('finnegans-exegese.js', 'utf8'));
console.log(`${videos.length} UNESCO videos, 4356 distinct quizzes without parallel octaves or fifths, alternating feed and tab reload verified.`);
