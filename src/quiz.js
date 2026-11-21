function installHarmonyQuiz(global, getVexFlow, standalone) {
  "use strict";
  const styles = `/* An die Papier-, Linien- und Schriftfarben der Kartei angeglichen. */
.card.harmony-card .card-media{display:none}
.card.harmony-card .card-open{padding-bottom:14px}
.hq-player{--hq-muted:var(--muted,#69645d);--hq-line:var(--line,#d7d0c5);--hq-ink:var(--ink,#191817);--hq-accent:var(--accent,#8b2f28);font-family:"IBM Plex Sans",Arial,sans-serif;color:var(--hq-ink)}
.card .hq-player{margin:1px 18px 19px;padding-top:15px;border-top:1px solid var(--hq-line)}
.hq-large{margin:3px 0 18px}
.hq-line{display:flex;justify-content:space-between;align-items:center;gap:7px;color:var(--hq-accent);font-size:10px;font-weight:600;letter-spacing:.085em}
.hq-counter{font-size:10px;font-weight:400;letter-spacing:0;color:var(--hq-muted);white-space:nowrap}
.hq-chords{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:14px 0 16px}
.hq-chord{position:relative;display:flex;flex-direction:column;justify-content:space-between;min-width:0;min-height:85px;padding:12px 13px;border:1px solid var(--hq-line);background:#f7f3ec;transition:border-color .18s,background .18s}
.hq-chord.hq-secret{background:#f2ece3}
.hq-chord.hq-active{border-color:var(--hq-accent);background:#f5e8e0;box-shadow:inset 0 0 0 1px var(--hq-accent)}
.hq-step{font-size:11px;font-variant-numeric:tabular-nums;color:var(--hq-muted)}
.hq-chord strong{display:block;overflow-wrap:anywhere;margin-top:8px;font:600 clamp(16px,2vw,22px)/1.13 "Source Serif 4",Georgia,serif}
.hq-secret strong{font-size:30px;font-weight:400;color:var(--hq-accent)}
.hq-controls{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between}
.hq-primary,.hq-actions{display:flex;gap:7px;flex-wrap:wrap}
.hq-player button{min-height:42px;border:1px solid #7d756c;border-radius:2px;background:#fffdf9;color:#272522;padding:9px 12px;cursor:pointer;font:500 12px/1.25 "IBM Plex Sans",sans-serif;transition:background .13s}
.hq-player button:hover{background:#eee8de}
.hq-player button:focus-visible,.hq-player input:focus-visible,.hq-player select:focus-visible{outline:2px solid var(--hq-accent);outline-offset:2px}
.hq-player .hq-play{background:#282522;color:#fff;border-color:#282522;min-width:116px}
.hq-player .hq-play:hover{background:#4a433d}
.hq-player .hq-reveal{border-color:var(--hq-accent);color:var(--hq-accent)}
.hq-player .hq-new{color:#4c4640}
.hq-options{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:13px 12px;margin-top:17px;padding-top:14px;border-top:1px solid var(--hq-line)}
.hq-field{display:flex;flex-direction:column;gap:6px;min-width:0;color:var(--hq-muted);font:12px/1.2 "IBM Plex Sans",sans-serif}
.hq-field select{display:block;width:100%;height:36px;padding:0 6px;border:1px solid #bab2a8;border-radius:2px;background:#fffdf9;color:#302b26;font:12px "IBM Plex Sans",sans-serif}
.hq-speed{display:grid;grid-template-columns:1fr auto;align-items:center;column-gap:8px}
.hq-speed input{grid-column:1/-1;width:100%;height:18px;margin:1px 0;accent-color:#8b2f28}
.hq-bpm{font-size:11px;font-variant-numeric:tabular-nums}
.hq-repeat{display:flex;align-items:center;gap:8px;align-self:end;min-height:36px;color:#49443d;font:12px "IBM Plex Sans",sans-serif;cursor:pointer}
.hq-repeat input{width:16px;height:16px;margin:0;accent-color:#8b2f28}
.hq-status{min-height:0;margin-top:6px;color:#8b2f28;font:12px/1.4 "IBM Plex Sans",sans-serif}
.hq-status:empty{display:none}
.hq-voices{margin-top:18px;padding:15px;border:1px solid var(--hq-line);background:#f7f3ec}
.hq-voices[hidden]{display:none}
.hq-voices-head{margin:0 0 12px;color:var(--hq-muted);font:11px/1.4 "IBM Plex Sans",sans-serif}
.hq-voice-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 16px}
.hq-voice-cell{min-width:0;border-left:2px solid #b6aaa0;padding-left:10px}
.hq-voice-cell b{display:block;margin-bottom:5px;font-size:13px}
.hq-voice-cell span{display:block;color:#524d46;font-size:11px;line-height:1.65}
@media(min-width:610px){.hq-large .hq-chords{grid-template-columns:repeat(4,minmax(0,1fr))}.hq-large .hq-chord{min-height:110px;padding:15px}.hq-large .hq-chord strong{font-size:23px}.hq-large .hq-options{grid-template-columns:1.2fr 1fr 1fr auto;align-items:end;gap:20px}.hq-large .hq-voice-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:450px){.hq-player .hq-controls{align-items:stretch}.hq-primary{width:100%}.hq-primary .hq-play{width:100%}.hq-actions{width:100%}.hq-actions button{flex:1}.hq-chord{min-height:79px;padding:10px}.hq-chord strong{font-size:19px}}
@media(prefers-reduced-motion:reduce){.hq-player button,.hq-chord{transition:none}}
/* Auflösung als zusammenhängendes zweizeiliges Notensystem. */
.hq-score-section{margin:0 0 18px}
.hq-score-heading{margin:0 0 8px;font:600 17px/1.3 "Source Serif 4",Georgia,serif;color:var(--hq-ink)}
.hq-score-paper{box-sizing:border-box;width:100%;max-width:520px;margin-inline:auto;border:1px solid var(--hq-line);background:#fffdfa}
.hq-score-paper svg{display:block;width:100%;height:auto}
@media(max-width:480px){.card .hq-player{margin-inline:8px}.hq-voices{padding-inline:8px}.hq-score-paper{border:0}}`;
  const controllers = new WeakMap();
  let active = null, ctx = null, ambient = null;
  function installStyles(root) {
    if (root.querySelector("style[data-harmony]")) return;
    const sheet = document.createElement("style");
    sheet.dataset.harmony = "";
    sheet.textContent = styles;
    (root.head || root).append(sheet);
  }
  const ROOTS = {
    major: {
      1: ["Des", "F", "As"], 2: ["D", "Fis", "A"], 3: ["Es", "G", "B"],
      4: ["E", "Gis", "H"], 5: ["F", "A", "C"], 6: ["Fis", "Ais", "Cis"],
      7: ["G", "H", "D"], 8: ["As", "C", "Es"], 9: ["A", "Cis", "E"],
      10: ["B", "D", "F"], 11: ["H", "Dis", "Fis"]
    },
    minor: {
      1: ["Cis", "E", "Gis"], 2: ["D", "F", "A"], 3: ["Es", "Ges", "B"],
      4: ["E", "G", "H"], 5: ["F", "As", "C"], 6: ["Fis", "A", "Cis"],
      7: ["G", "B", "D"], 8: ["Gis", "H", "Dis"], 9: ["A", "C", "E"],
      10: ["B", "Des", "F"], 11: ["H", "D", "Fis"]
    }
  };
  const C_CHORD = {root:0, quality:"major", inversion:0, pcs:[0,4,7], names:["C","E","G"], label:"C"};
  const voiceLabels = ["Bass", "Tenor", "Alt", "Sopran"];
  const pc = x => ((x%12)+12)%12;
  const notePitch = (root, interval) => pc(root+interval);
  function chord(root, quality, inversion) {
    if (root===0) return {...C_CHORD};
    const names = ROOTS[quality][root], pcs=[root, notePitch(root, quality==="major"?4:3), notePitch(root,7)];
    return {root,quality,inversion,pcs,names,
      label:`${noteNameShown(names[0])}${quality==="minor"?"-":""}${inversion?"/"+noteNameShown(names[inversion]):""}`};
  }
  function middle(code) {
    return chord(1 + Math.floor(code / 6), code % 6 < 3 ? "major" : "minor", code % 3);
  }
  function bassPc(c) { return c.pcs[c.inversion]; }
  function candidatePitches(pitchClass,min,max) {
    const out=[]; for(let n=min;n<=max;n++) if(pc(n)===pitchClass) out.push(n); return out;
  }
  function permutations(arr) {
    return [[arr[0],arr[1],arr[2]],[arr[0],arr[2],arr[1]],
      [arr[1],arr[0],arr[2]],[arr[1],arr[2],arr[0]],
      [arr[2],arr[0],arr[1]],[arr[2],arr[1],arr[0]]];
  }
  function voicings(c,final=false) {
    const bass = final?[48]:candidatePitches(bassPc(c),41,55), result=[];
    const perm = permutations(c.pcs);
    for(const b of bass) for(const pitches of perm) {
      for(const t of candidatePitches(pitches[0],52,65)) {
        if(t<=b+4 || t-b>23)continue;
        for(const a of candidatePitches(pitches[1],57,72)) {
          if(a<=t+2 || a-t>12)continue;
          for(const s of candidatePitches(pitches[2],62,79)) {
            if(s<=a+2 || s-a>12)continue;
            result.push([b,t,a,s]);
          }
        }
      }
    }
    // Einige Akkordlagen sind bei weit entfernten Tonarten recht eng; die Bereiche
    // enthalten dennoch für jede der zwölf Tonklassen passende vierstimmige Sätze.
    return result;
  }
  function staticCost(v) {
    const centers=[48,56,63,69], weights=[.1,.1,.08,.08];
    return v.reduce((sum,n,i)=>sum+Math.abs(n-centers[i])*weights[i],0);
  }
  function transition(prev,next) {
    let cost=0;
    const weights=[1.25,1.05,1.15,1.5];
    for(let i=0;i<4;i++) {
      const leap=Math.abs(next[i]-prev[i]);
      cost+=leap*weights[i]+Math.pow(Math.max(0,leap-(i===0?7:5)),2)*.36;
    }
    // Gleichgerichtete parallele reine Quinten und Oktaven vermeiden.
    for(let a=0;a<4;a++)for(let b=a+1;b<4;b++) {
      const before=pc(prev[b]-prev[a]), after=pc(next[b]-next[a]);
      const da=next[a]-prev[a],db=next[b]-prev[b];
      if ((before===0||before===7) && before===after && da*db>0) cost+=11;
    }
    return cost;
  }
  function voiceLead(chords) {
    const start=[48,55,60,64];
    const candidates=[[start],voicings(chords[1]),voicings(chords[2]),voicings(chords[3],true)];
    if(candidates.some(group=>!group.length))throw new Error("Keine gültige Stimmenführung gefunden.");
    let scores=[0], paths=[];
    for(let step=1;step<4;step++) {
      const prev=candidates[step-1], next=candidates[step], newScores=[], links=[];
      for(let i=0;i<next.length;i++) {
        let best=Infinity,bestJ=0;
        for(let j=0;j<prev.length;j++) {
          const score=scores[j]+transition(prev[j],next[i])+staticCost(next[i]);
          if(score<best) {best=score;bestJ=j;}
        }
        newScores.push(best);links.push(bestJ);
      }
      paths.push(links);scores=newScores;
    }
    let index=scores.indexOf(Math.min(...scores)), result=new Array(4);
    for(let step=3;step>=1;step--) {result[step]=candidates[step][index];index=paths[step-1][index];}
    result[0]=start;
    return result;
  }
  function createPuzzle(code) {
    const chords=[{...C_CHORD},middle(Math.floor(code / 66)),middle(code % 66),{...C_CHORD}];
    return {id:code,chords,voices:voiceLead(chords),revealed:false};
  }
  function noteLabel(midi,c) {
    const index=c.pcs.indexOf(pc(midi)), name=c.names[index] || "?";
    return `${noteNameShown(name)}${Math.floor(midi/12)-1}`;
  }
  const noteNameShown = name => name === "B" ? "B♭" : name;

  function notationKey(name, midi) {
    const letter = name === "H" ? "b" : name[0].toLowerCase();
    let accidental = "";
    if (name.endsWith("is")) accidental = "#";
    else if (name === "B" || name === "As" || name.toLowerCase().endsWith("es")) accidental = "b";
    return `${letter}${accidental}/${Math.floor(midi / 12) - 1}`;
  }

  function drawScore(paper, puzzle) {
    const V = getVexFlow();
    const width = 352;
    const renderer = new V.Renderer(paper, V.Renderer.Backends.SVG);
    const context = renderer.getContext();
    // SVGContext.resize sets absolute dimensions on the host. A viewBox alone
    // keeps the engraving proportional in narrow cards and detached detail views.
    const treble = new V.Stave(26, -7, width - 37).addClef("treble");
    const bass = new V.Stave(26, 81, width - 37).addClef("bass");
    V.Stave.formatBegModifiers([treble, bass]);
    for (const stave of [treble, bass]) stave.setContext(context).draw();
    for (const type of ["brace", "singleLeft", "singleRight"]) {
      new V.StaveConnector(treble, bass).setType(type).setContext(context).draw();
    }

    const upperNotes = [], lowerNotes = [];
    for (const [index, pitches] of puzzle.voices.entries()) {
      const chord = puzzle.chords[index];
      const upper = [], lower = [];
      pitches.forEach((midi, voice) => {
        const name = chord.names[chord.pcs.indexOf(pc(midi))];
        (voice === 0 || midi < 60 ? lower : upper).push(notationKey(name, midi));
      });
      upperNotes.push(new V.StaveNote({clef: "treble", keys: upper, duration: "q", auto_stem: true}).setStave(treble));
      lowerNotes.push(new V.StaveNote({clef: "bass", keys: lower, duration: "q", auto_stem: true}).setStave(bass));
    }
    const melody = new V.Voice().addTickables(upperNotes);
    const accompaniment = new V.Voice().addTickables(lowerNotes);
    V.Accidental.applyAccidentals([melody], "C");
    V.Accidental.applyAccidentals([accompaniment], "C");
    new V.Formatter().joinVoices([melody]).joinVoices([accompaniment])
      .formatToStave([melody, accompaniment], treble);
    melody.draw(context, treble);
    accompaniment.draw(context, bass);

    // Measure in engraving coordinates, even when the detail card is not yet in the DOM.
    const bounds = [...upperNotes, ...lowerNotes].map(note => note.getBoundingBox());
    const top = Math.floor(Math.min(10, ...bounds.map(box => box.getY()))) - 8;
    const bottom = Math.max(bass.getYForLine(4), ...bounds.map(box => box.getY() + box.getH()));
    const labelY = Math.ceil(bottom) + 24;
    context.setViewBox(0, top, width, labelY + 10 - top);
    const svg = paper.querySelector("svg");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Vier Akkorde im Violin- und Bassschlüssel: " +
      puzzle.chords.map(chord => chord.label).join(", "));
    for (const [index, note] of upperNotes.entries()) {
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", note.getNoteHeadBeginX() + note.getGlyphWidth() / 2);
      label.setAttribute("y", labelY);
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("stroke", "none");
      label.setAttribute("font-family", "Georgia, serif");
      label.setAttribute("font-size", "15");
      label.textContent = puzzle.chords[index].label;
      svg.append(label);
    }
  }

  function ensureAudio() {
    if(!ctx){
      const AudioContext=global.AudioContext||global.webkitAudioContext;
      if(!AudioContext)throw new Error("Dieser Browser unterstützt Web Audio nicht.");
      ctx=new AudioContext();
      const delay=ctx.createDelay(.6), feedback=ctx.createGain(),filter=ctx.createBiquadFilter(),wet=ctx.createGain();
      delay.delayTime.value=.19;feedback.gain.value=.22;filter.type="lowpass";filter.frequency.value=2400;wet.gain.value=.16;
      delay.connect(filter);filter.connect(feedback);feedback.connect(delay);delay.connect(wet);wet.connect(ctx.destination);
      ambient=delay;
    }
    return ctx.resume();
  }
  function createController() {
    let quiz = createPuzzle(window.MUSIC_FEED.nextQuizId());
    const settings = {bpm:86, timbre:"piano", mode:"block", repeat:false};
    const views = new Set();
    let playBus = null, timers = [], playing = false, activeStep = -1, epoch = 0;
    function clearTimers() {for(const id of timers)clearTimeout(id);timers=[];}
    function stopAudio() {
      if (active === controller) active = null;
      epoch++; clearTimers(); playing=false;activeStep=-1;
      if(playBus && ctx) {
        const now=ctx.currentTime;
        playBus.gain.cancelScheduledValues(now);
        playBus.gain.setTargetAtTime(.00001,now,.025);
        const bus=playBus;setTimeout(()=>{try{bus.disconnect();}catch{}},260);
        playBus=null;
      }
      redraw();
    }
    function scheduleNote(midi,when,hold,level,pan=0) {
      const f=440*Math.pow(2,(midi-69)/12),kind=settings.timbre;
      const attack=kind==="warm"?.085:.011;
      const note=ctx.createGain(),release=kind==="organ"?.25:kind==="warm"?.5:.32;
      const volume=kind==="organ"?level*.63:level;
      note.gain.setValueAtTime(.0001,when);
      note.gain.exponentialRampToValueAtTime(volume,when+attack);
      if(kind==="piano")note.gain.exponentialRampToValueAtTime(volume*.20,when+Math.min(hold*.7,.72));
      else if(kind==="warm")note.gain.setTargetAtTime(volume*.66,when+attack,.38);
      const off=when+hold;
      note.gain.setTargetAtTime(.0001,off,release/4);
      let out=note;
      if(ctx.createStereoPanner){const stereo=ctx.createStereoPanner();stereo.pan.value=pan;note.connect(stereo);out=stereo;}
      out.connect(playBus);
      const partials=kind==="organ"?[[1,1],[2,.26],[3,.12]]:kind==="warm"?[[1,1],[2,.14],[3,.05]]:[[1,1],[2,.27],[3,.13],[4,.045]];
      for(const [partial,amp] of partials){
        const oscillator=ctx.createOscillator(),gain=ctx.createGain();
        oscillator.type="sine";oscillator.frequency.setValueAtTime(f*partial,when);
        // leichte Einschwingdifferenz für ein weniger steriles Timbre
        gain.gain.value=amp*(partial===1?1:.78);
        oscillator.connect(gain);gain.connect(note);
        oscillator.start(when);oscillator.stop(off+Math.max(.45,release*2));
      }
    }
    function scheduleChord(voices,when,duration) {
      for(let i=0;i<4;i++){
        const offset=settings.mode==="broken"?i*.14: i*.009;
        const noteHold=Math.max(.35,duration-(settings.mode==="broken"?offset:.02)-.11);
        scheduleNote(voices[i],when+offset,noteHold,i===0?.105:.055,[-.18,-.12,.11,.26][i]);
      }
    }
    async function play() {
      if(playing){stopAudio();return;}
      active?.stop();
      active = controller;
      const requestedEpoch=epoch;
      try{await ensureAudio();}catch(e){if(epoch===requestedEpoch)announce(e.message);return;}
      // Bei einem zweiten schnellen Klick eine überholte Wiedergabe verwerfen.
      if(epoch!==requestedEpoch)return;
      const thisEpoch=epoch, bar=60/settings.bpm*2, start=ctx.currentTime+.06;
      playBus=ctx.createGain();playBus.gain.value=1;playBus.connect(ctx.destination);playBus.connect(ambient);
      playing=true;
      quiz.voices.forEach((v,i)=>{
        scheduleChord(v,start+i*bar,bar);
        timers.push(setTimeout(()=>{if(epoch===thisEpoch){activeStep=i;redraw();}},i*bar*1000+40));
      });
      redraw();
      timers.push(setTimeout(()=>{
        if(epoch!==thisEpoch)return;
        if(settings.repeat && [...views].some(view => view.isConnected)){stopAudio();void play();}
        else stopAudio();
      },bar*4*1000+300));
    }
    function announce(text) {
      views.forEach(view=>{const status=view.querySelector(".hq-status");if(status)status.textContent=text;});
    }
    function newPuzzle() {stopAudio();quiz=createPuzzle(window.MUSIC_FEED.nextQuizId());redraw();}
    function toggleReveal() {quiz.revealed=!quiz.revealed;redraw();}
    function makeButton(label,klass,listener) {
      const b=document.createElement("button");b.type="button";b.className=klass;b.textContent=label;b.addEventListener("click",listener);return b;
    }
    function makeControl(caption,kind,values) {
      const label=document.createElement("label");label.className="hq-field";
      const name=document.createElement("span");name.textContent=caption;
      const select=document.createElement("select");select.setAttribute("aria-label",caption);
      for(const [value,text] of values){const opt=document.createElement("option");opt.value=value;opt.textContent=text;select.append(opt);}
      select.value=settings[kind];select.addEventListener("change",()=>{
        const chosen=select.value; settings[kind]=chosen; stopAudio();
      });
      label.append(name,select);return label;
    }
    function makeView(large) {
      const root=document.createElement("section");root.className=`hq-player ${large?"hq-large":"hq-small"}`;
      root.setAttribute("aria-label","Akkord-Mystery-Spieler");
      root.innerHTML=`<div class="hq-line"><span>HÖRRÄTSEL · VIERSTIMMIG</span><span class="hq-counter">4 Akkorde</span></div>
        <div class="hq-chords" aria-label="Vier Akkorde; die mittleren sind zunächst verborgen"></div>
        <div class="hq-controls"><div class="hq-primary"></div><div class="hq-actions"></div></div>
        <div class="hq-options"></div><div class="hq-status" aria-live="polite"></div>
        <div class="hq-voices" hidden></div>`;
      const primary=root.querySelector(".hq-primary"),actions=root.querySelector(".hq-actions");
      const playButton=makeButton("▶  Abspielen","hq-play",()=>void play());
      const revealButton=makeButton("Ergebnis zeigen","hq-reveal",toggleReveal);
      const newButton=makeButton("↻  Neue Karte","hq-new",newPuzzle);
      primary.append(playButton);actions.append(revealButton,newButton);
      const options=root.querySelector(".hq-options");
      const speed=document.createElement("label");speed.className="hq-field hq-speed";
      const label=document.createElement("span");label.textContent="Tempo";
      const range=document.createElement("input");range.type="range";range.min="50";range.max="140";range.step="2";range.value=String(settings.bpm);range.setAttribute("aria-label","Tempo in Vierteln pro Minute");
      range.addEventListener("input",()=>{
        const newTempo=Number(range.value);settings.bpm=newTempo;stopAudio();
      });
      const speedValue=document.createElement("output");speedValue.className="hq-bpm";
      speed.append(label,range,speedValue);
      options.append(speed,
        makeControl("Klang","timbre",[["piano","Weicher Klavierton"],["warm","Warmer Synthesizer"],["organ","Orgel"]]),
        makeControl("Spielweise","mode",[["block","Zusammen"],["broken","Leicht gebrochen"]]));
      const repeat=document.createElement("label");repeat.className="hq-repeat";
      const check=document.createElement("input");check.type="checkbox";check.checked=settings.repeat;
      check.addEventListener("change",()=>{settings.repeat=check.checked;redraw();});
      repeat.append(check,document.createTextNode("Wiederholen"));options.append(repeat);
      for (const view of views) if (!view.isConnected) views.delete(view);
      views.add(root);root._hq={playButton,revealButton,range,speedValue,check};
      updateView(root);
      return root;
    }
    function updateView(root) {
      if(!root.isConnected && root._hq?.seen) {views.delete(root);return;}
      root._hq.seen=true;
      const chords=root.querySelector(".hq-chords");chords.replaceChildren();
      quiz.chords.forEach((c,i)=>{
        const box=document.createElement("div");box.className=`hq-chord${activeStep===i?" hq-active":""}`;
        const number=document.createElement("span");number.className="hq-step";number.textContent=String(i+1).padStart(2,"0");
        const value=document.createElement("strong");
        value.textContent=(i===0||i===3||quiz.revealed)?c.label:"?";
        if((i===1||i===2)&&!quiz.revealed)box.classList.add("hq-secret");
        box.append(number,value);chords.append(box);
      });
      root._hq.playButton.textContent=playing?"■  Stoppen":"▶  Abspielen";
      root._hq.revealButton.textContent=quiz.revealed?"Ergebnis verbergen":"Ergebnis zeigen";
      root._hq.range.value=String(settings.bpm);root._hq.speedValue.textContent=`${settings.bpm} BPM`;
      root._hq.check.checked=settings.repeat;
      root.querySelectorAll("select").forEach(s=>{
        if(s.getAttribute("aria-label")==="Klang")s.value=settings.timbre;
        if(s.getAttribute("aria-label")==="Spielweise")s.value=settings.mode;
      });
      const voices=root.querySelector(".hq-voices");voices.hidden=!quiz.revealed;
      if(quiz.revealed && voices.dataset.quizId!==String(quiz.id)) {
        voices.dataset.quizId=String(quiz.id);voices.replaceChildren();
        const scoreSection=document.createElement("div");scoreSection.className="hq-score-section";
        const heading=document.createElement("h3");heading.className="hq-score-heading";heading.textContent="Partitur · vier Akkorde";
        const paper=document.createElement("div");paper.className="hq-score-paper";
        scoreSection.append(heading,paper);voices.append(scoreSection);
        drawScore(paper,quiz);
        const head=document.createElement("p");head.className="hq-voices-head";head.textContent="Realisiert im vierstimmigen Satz · klingende Tonhöhe";voices.append(head);
        const grid=document.createElement("div");grid.className="hq-voice-grid";
        for(let i=0;i<4;i++){
          const cell=document.createElement("div");cell.className="hq-voice-cell";
          const title=document.createElement("b");title.textContent=`${i+1}. ${quiz.chords[i].label}`;
          const notes=document.createElement("span");notes.textContent=quiz.voices[i].map((n,v)=>`${voiceLabels[v]} ${noteLabel(n,quiz.chords[i])}`).join(" · ");
          cell.append(title,notes);grid.append(cell);
        }
        voices.append(grid);
      }
    }
    function redraw() {for(const view of [...views])updateView(view);}
    function mount(host,large=false) {const view=makeView(large);host.append(view);return view;}
    function getPuzzle() {
      return {chords: quiz.chords.map(c => ({...c, pcs: [...c.pcs], names: [...c.names]})),
        voices: quiz.voices.map(v => [...v]), revealed: quiz.revealed};
    }
    const controller = {mount, stop: stopAudio, newPuzzle, getPuzzle,
      connected: () => [...views].some(view => view.isConnected)};
    return controller;
  }
  global.HARMONY_QUIZ = {
    mount(host, card, large = false) {
      let controller = controllers.get(card);
      if (!controller) {
        controller = createController();
        controllers.set(card, controller);
      }
      return controller.mount(host, large);
    },
    installStyles,
    stop() { active?.stop(); },
    stopIfDetached() { if (active && !active.connected()) active.stop(); },
    createPuzzle
  };
  global.addEventListener("pagehide", global.HARMONY_QUIZ.stop);
  if (standalone) {
    // The downloadable demo also supports driving its single puzzle from JS.
    const demo = createController();
    Object.assign(global.HARMONY_QUIZ, {
      mount: demo.mount, newPuzzle: demo.newPuzzle, getPuzzle: demo.getPuzzle,
      _test: {chord, voicings, transition, voiceLead, createPuzzle: () => createPuzzle(global.MUSIC_FEED.nextQuizId())}
    });
  }
}
