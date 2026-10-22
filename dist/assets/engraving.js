(function installNotationLabEngraving() {
  const EPS = 1e-6;
  const DURATIONS = [
    [4, "w", false],
    [3, "h", true],
    [2, "h", false],
    [1.5, "q", true],
    [1, "q", false],
    [0.75, "8", true],
    [0.5, "8", false],
    [0.25, "16", false],
    [0.125, "32", false],
    [0.0625, "64", false],
    [0.03125, "128", false]
  ];
  const BEAMABLE = /* @__PURE__ */ new Set(["8", "16", "32", "64", "128"]);
  function splitNotationBars(notes, sequence) {
    const bars = [];
    let bar = [];
    let used = 0;
    let barIndex = 0;
    for (let [index, item] of notes.entries()) {
      const source = typeof item === "number" ? { midi: item, beats: 1 } : item || {};
      let remaining = Math.max(0.03125, Number(source.beats) || 1);
      let firstFragment = true;
      while (remaining > EPS) {
        const meter = sequence[barIndex % sequence.length];
        const capacity = Math.max(EPS, meter.beats - used);
        const take = Math.min(remaining, capacity);
        bar.push(Object.assign({}, source, {
          beats: take,
          index,
          tiedFrom: !firstFragment,
          tiedTo: remaining - take > EPS
        }));
        remaining -= take;
        used += take;
        firstFragment = false;
        if (used >= meter.beats - EPS) {
          bars.push({ notes: bar, meter });
          bar = [];
          used = 0;
          barIndex += 1;
        }
      }
    }
    if (bar.length || !bars.length) {
      bars.push({ notes: bar, meter: sequence[barIndex % sequence.length] });
    }
    return bars;
  }
  function splitDuration(beats, source) {
    const parts = [];
    let remaining = Math.max(0, Number(beats) || 0);
    for (const [value, duration, dot] of DURATIONS) {
      while (remaining >= value - EPS && remaining > EPS) {
        parts.push(Object.assign({}, source, { beats: value, duration, dot }));
        remaining -= value;
      }
    }
    return parts;
  }
  function groupUnitsForMeter(meter) {
    if (meter && Array.isArray(meter.groups) && meter.groups.length) return meter.groups;
    const count = Math.max(1, Number(meter && meter.n) || 4);
    return Array(count).fill(1);
  }
  function drawMeterAwareBeams(V, vfnotes, fragments, meter, ctx) {
    if (!vfnotes.length || !V.Beam || !V.Fraction) return;
    const groups = groupUnitsForMeter(meter);
    const unitBeats = 4 / Math.max(1, Number(meter.d) || 4);
    const groupEnds = [];
    let total = 0;
    for (const units of groups) {
      total += units * unitBeats;
      groupEnds.push(total);
    }
    let cursor = 0;
    let groupIndex = 0;
    let run = [];
    let runGroup = -1;
    const flush = () => {
      if (run.length > 1) {
        try {
          const beamGroup = groups[Math.max(0, runGroup)] || groups[groups.length - 1] || 1;
          const beams = V.Beam.generateBeams(run, {
            groups: [new V.Fraction(beamGroup, meter.d)],
            flat_beams: true
          });
          beams.forEach((beam) => beam.setContext(ctx).draw());
        } catch (error) {
        }
      }
      run = [];
      runGroup = -1;
    };
    fragments.forEach((fragment, index) => {
      while (groupIndex < groupEnds.length - 1 && cursor >= groupEnds[groupIndex] - EPS) groupIndex += 1;
      const groupStart = groupIndex === 0 ? 0 : groupEnds[groupIndex - 1];
      const groupEnd = groupEnds[groupIndex] || (meter.beats || cursor + fragment.beats);
      const end = cursor + fragment.beats;
      const canBeam = BEAMABLE.has(fragment.duration) && !fragment.dot && end <= groupEnd + EPS && cursor >= groupStart - EPS && !fragment.tiedFrom && !fragment.tiedTo;
      if (!canBeam || run.length && groupIndex !== runGroup) flush();
      if (canBeam) {
        if (!run.length) runGroup = groupIndex;
        run.push(vfnotes[index]);
      }
      cursor = end;
    });
    flush();
  }
  function notationLabEngrave(el, notes, clef = "treble", highlight = -1, sequence = [{ n: 4, d: 4, beats: 4, label: "4/4", groups: [1, 1, 1, 1] }]) {
    el.innerHTML = "";
    const V = Vex.Flow;
    const bars = splitNotationBars(notes, sequence);
    for (let barIndex = 0; barIndex < bars.length; barIndex += 1) {
      const bar = bars[barIndex];
      const holder = document.createElement("div");
      holder.style.display = "inline-block";
      holder.style.verticalAlign = "top";
      holder.style.marginRight = "18px";
      el.append(holder);
      const fragments = [];
      for (const note of bar.notes) {
        const parts = splitDuration(note.beats, note);
        parts.forEach((part, partIndex) => {
          part.tiedFrom = !!note.tiedFrom || partIndex > 0;
          part.tiedTo = !!note.tiedTo || partIndex < parts.length - 1;
          fragments.push(part);
        });
      }
      const diatonic = (midi) => (Math.floor(midi / 12) - 1) * 7 + natural.indexOf(noteLetter(midi));
      const bottom = clef === "bass" ? diatonic(43) : diatonic(64);
      const yPositions = fragments.map((fragment) => {
        const pitches = Array.isArray(fragment.midis) ? fragment.midis : [fragment.midi];
        const midi = pitches.find((value) => Number.isInteger(value));
        return Number.isInteger(midi) ? 100 - (diatonic(midi) - bottom) * 5 : 100;
      });
      const top = Math.max(20, 20 - Math.min(60, ...yPositions));
      const height = Math.max(170, Math.max(100, ...yPositions) + top + 45);
      const width = Math.max(320, fragments.length * 62 + 170);
      const renderer = new V.Renderer(holder, V.Renderer.Backends.SVG);
      renderer.resize(width, height);
      const ctx = renderer.getContext();
      const stave = new V.Stave(10, top, width - 20);
      stave.addClef(clef).addTimeSignature(bar.meter.label).setContext(ctx).draw();
      if (fragments.length) {
        const accidentalState = /* @__PURE__ */ new Map();
        const vfnotes = fragments.map((fragment) => {
          const pitches = Array.isArray(fragment.midis) ? fragment.midis : [fragment.midi];
          let note;
          if (fragment.rest) {
            note = new V.GhostNote({ duration: fragment.duration });
          } else {
            const keys = pitches.filter((value) => Number.isInteger(value)).map((midi) => names[pitchClass(midi)].replace("\u266F", "#").toLowerCase() + "/" + (Math.floor(midi / 12) - 1));
            note = new V.StaveNote({ clef, keys: keys.length ? keys : ["b/4"], duration: fragment.duration, auto_stem: true });
            keys.forEach((keyText, keyIndex) => {
              const midi = pitches[keyIndex];
              const pitchName = keyText.split("/")[0];
              const octave = Math.floor(midi / 12) - 1;
              const key = noteLetter(midi) + octave;
              if (pitchName.includes("#")) {
                note.addModifier(new V.Accidental("#"), keyIndex);
                accidentalState.set(key, "#");
              } else if (accidentalState.get(key) === "#") {
                note.addModifier(new V.Accidental("n"), keyIndex);
                accidentalState.set(key, "n");
              }
            });
          }
          if (fragment.dot) V.Dot.buildAndAttach([note], { all: true });
          const articulationCode = fragment.articulation === "accent" ? "a>" : fragment.articulation === "staccato" ? "a." : fragment.articulation === "tenuto" ? "a-" : "";
          if (!fragment.rest && articulationCode && V.Articulation) {
            const articulation = new V.Articulation(articulationCode);
            if (articulation.setPosition) articulation.setPosition(V.ModifierPosition ? V.ModifierPosition.ABOVE : 3);
            note.addModifier(articulation, 0);
          }
          if (fragment.role === "preview") note.setStyle({ fillStyle: "#8f68d6", strokeStyle: "#8f68d6" });
          else if (fragment.role === "actual-good") note.setStyle({ fillStyle: "#18895f", strokeStyle: "#18895f" });
          else if (fragment.role === "actual-bad") note.setStyle({ fillStyle: "#c74d5b", strokeStyle: "#c74d5b" });
          else if (fragment.role === "target") note.setStyle({ fillStyle: fragment.index === highlight ? "#6266db" : "#263a60", strokeStyle: fragment.index === highlight ? "#6266db" : "#263a60" });
          else if (fragment.index === highlight) note.setStyle({ fillStyle: "#6266db", strokeStyle: "#6266db" });
          return note;
        });
        const voice = new V.Voice({ num_beats: bar.meter.n, beat_value: bar.meter.d }).setStrict(false).addTickables(vfnotes);
        new V.Formatter().joinVoices([voice]).format([voice], width - 150);
        voice.draw(ctx, stave);
        if (bar.notes[0] && bar.notes[0].tiedFrom) {
          new V.StaveTie({ last_note: vfnotes[0], last_indices: [0] }).setContext(ctx).draw();
        }
        const lastNote = bar.notes[bar.notes.length - 1];
        if (lastNote && lastNote.tiedTo) {
          new V.StaveTie({ first_note: vfnotes[vfnotes.length - 1], first_indices: [0] }).setContext(ctx).draw();
        }
        drawMeterAwareBeams(V, vfnotes, fragments, bar.meter, ctx);
        for (let index = 1; index < fragments.length; index += 1) {
          if (fragments[index].index === fragments[index - 1].index && fragments[index - 1].tiedTo) {
            new V.StaveTie({ first_note: vfnotes[index - 1], last_note: vfnotes[index], first_indices: [0], last_indices: [0] }).setContext(ctx).draw();
          }
        }
        vfnotes.forEach((note, index) => {
          const svg = note.getSVGElement();
          if (svg && el.id === "composeScore" && !fragments[index].rest) {
            svg.style.cursor = "pointer";
            svg.onclick = () => selectNote(fragments[index].index);
          }
        });
      }
      holder.setAttribute("aria-label", "Bar " + (barIndex + 1) + " " + bar.meter.label);
    }
  }
  function notationLabComparison(el, target, payload, clef, highlight, hinted) {
    const targetNotes = (target || []).map((item) => {
      const source = typeof item === "number" ? { midi: item, beats: 1 } : Object.assign({}, item);
      source.role = "target";
      return source;
    });
    if (!payload) {
      notationLabEngrave(el, targetNotes, clef, highlight);
      return;
    }
    const actualMidi = Number(payload.n);
    if (!Number.isInteger(actualMidi)) return;
    const activeTarget = targetNotes[highlight >= 0 && highlight < targetNotes.length ? highlight : 0];
    const actual = {
      midi: actualMidi,
      beats: Math.max(0.25, Number(payload.beats) || activeTarget && activeTarget.beats || 1),
      velocity: payload.velocity,
      articulation: payload.articulation,
      role: activeTarget && (actualMidi === activeTarget.midi || (actualMidi - activeTarget.midi) % 12 === 0) ? "actual-good" : "actual-bad"
    };
    const notes = targetNotes.concat([actual]);
    notationLabEngrave(el, notes, clef, highlight);
    const legend = document.createElement("div");
    legend.className = "comparison-legend";
    legend.innerHTML = '<span class="comparison-target">Target</span><span class="comparison-played">Played</span>' + (hinted ? '<span class="comparison-hint">Hint labels on</span>' : "");
    el.append(legend);
  }
  engrave = notationLabEngrave;
  if (typeof window !== "undefined") window.notationLabComparison = notationLabComparison;
  if (!document.getElementById("notationLabComparisonStyles")) {
    const style = document.createElement("style");
    style.id = "notationLabComparisonStyles";
    style.textContent = '.comparison-legend{display:flex;gap:14px;align-items:center;margin:4px 2px 0;font-size:12px;font-weight:700;color:#52607d}.comparison-target::before,.comparison-played::before{content:"";display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:5px;background:#263a60}.comparison-played::before{background:#18895f}.comparison-hint{font-weight:500;color:#697792}';
    document.head.append(style);
  }
  if (typeof compositionRenderKey !== "undefined") compositionRenderKey = "";
  if (typeof renderComposition === "function") renderComposition();
  if (typeof liveNotesByTab !== "undefined" && typeof renderTrainingComparison === "function") {
    ["read", "sight", "ear"].forEach((tabName) => {
      const payload = liveNotesByTab.get(tabName);
      if (payload) renderTrainingComparison(tabName, payload);
    });
  }
})();
