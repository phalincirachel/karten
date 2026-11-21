// GitHub Pages and Violentmonkey both load this classic script directly.
const fs = require('node:fs');
const path = require('node:path');
process.chdir(path.resolve(__dirname, '..'));

function read(file) {
  return fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').trimEnd();
}
const library = read(require.resolve('vexflow/bravura')).replace(/\n\/\/# sourceMappingURL=[^\n]+$/, '');
const license = read('node_modules/vexflow/LICENSE') + '\n\n' + read('licenses/Bravura.txt');
const bundle = `// Generated from src/quiz.js by npm run build:quiz.
;(() => {
  /* ${license} */
  function loadVexFlow() {
    const module = {exports: {}}, exports = module.exports;
${library}
    return module.exports;
  }
  let engraver;
${read('src/quiz.js')}
  installHarmonyQuiz(window, () => engraver ??= loadVexFlow(), window.document?.currentScript?.hasAttribute('data-standalone'));
})();
`;
fs.writeFileSync('cards-editorial.js', bundle);
const demo = read('src/quiz-demo.html').replace('/* BUNDLED_QUIZ */', () => bundle.replace(/<\/script/gi, '<\\/script'));
fs.writeFileSync('akkord-mystery-demo.html', demo + '\n');
