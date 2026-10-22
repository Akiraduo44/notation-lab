"use strict";
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
(function(global, doc) {
  var w = global || window;
  var slice = Array.prototype.slice;
  if (!w.queueMicrotask) w.queueMicrotask = function(callback) {
    return w.setTimeout(callback, 0);
  };
  if (!w.performance) w.performance = {};
  if (typeof w.performance.now !== "function") w.performance.now = function() {
    return Date.now();
  };
  if (!w.requestAnimationFrame) w.requestAnimationFrame = function(callback) {
    return w.setTimeout(function() {
      callback(w.performance.now());
    }, 16);
  };
  if (!w.cancelAnimationFrame) w.cancelAnimationFrame = function(id) {
    w.clearTimeout(id);
  };
  if (!Array.from) Array.from = function(value) {
    return slice.call(value);
  };
  if (!Array.prototype.includes) Array.prototype.includes = function(value, from) {
    var i = from || 0;
    if (i < 0) i = Math.max(0, this.length + i);
    for (; i < this.length; i++) if (this[i] === value || value !== value && this[i] !== this[i]) return true;
    return false;
  };
  if (!String.prototype.includes) String.prototype.includes = function(value, start) {
    return this.indexOf(value, start || 0) !== -1;
  };
  if (!String.prototype.startsWith) String.prototype.startsWith = function(value, start) {
    return this.slice(start || 0, (start || 0) + value.length) === value;
  };
  if (!String.prototype.padStart) String.prototype.padStart = function(length, fill) {
    var out = String(this), chars = fill === void 0 ? " " : String(fill);
    while (out.length < length) out = chars + out;
    return out.slice(-length);
  };
  if (!Number.isFinite) Number.isFinite = function(value) {
    return typeof value === "number" && isFinite(value);
  };
  if (!Number.isInteger) Number.isInteger = function(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
  if (!Math.log2) Math.log2 = function(value) {
    return Math.log(value) / Math.LN2;
  };
  if (!Object.getOwnPropertyDescriptors) Object.getOwnPropertyDescriptors = function(value) {
    var out = {};
    Object.getOwnPropertyNames(Object(value)).forEach(function(key) {
      out[key] = Object.getOwnPropertyDescriptor(value, key);
    });
    return out;
  };
  if (!Object.entries) Object.entries = function(value) {
    var out = [];
    for (var key in Object(value)) if (Object.prototype.hasOwnProperty.call(value, key)) out.push([key, value[key]]);
    return out;
  };
  if (!Object.fromEntries) Object.fromEntries = function(entries) {
    var out = {};
    for (var i = 0; i < entries.length; i++) out[entries[i][0]] = entries[i][1];
    return out;
  };
  if (w.NodeList && !w.NodeList.prototype.forEach) w.NodeList.prototype.forEach = Array.prototype.forEach;
  if (w.HTMLCollection && !w.HTMLCollection.prototype.forEach) w.HTMLCollection.prototype.forEach = Array.prototype.forEach;
})(window, document);
function bindNotePress(button, note) {
  let down = false;
  let start = function(event) {
    if (event && event.preventDefault) event.preventDefault();
    if (event && event.stopPropagation) event.stopPropagation();
    if (down) return;
    down = true;
    button._notePointerCycle = true;
    if (event && event.pointerId !== void 0 && button.setPointerCapture) {
      try {
        button.setPointerCapture(event.pointerId);
      } catch (e) {
      }
    }
    noteOn(note, 96, "virtual");
  };
  let end = function(event) {
    if (event && event.preventDefault) event.preventDefault();
    if (!down) return;
    down = false;
    noteOff(note, "virtual");
    clearTimeout(button._noteCycleTimer);
    button._noteCycleTimer = setTimeout(() => button._notePointerCycle = false, 25);
  };
  if (typeof window.PointerEvent === "function") {
    button.addEventListener("pointerdown", start, false);
    button.addEventListener("pointerup", end, false);
    button.addEventListener("pointercancel", end, false);
    button.addEventListener("pointerleave", end, false);
  } else {
    button.addEventListener("mousedown", start, false);
    button.addEventListener("mouseup", end, false);
    button.addEventListener("mouseleave", end, false);
    button.addEventListener("touchstart", start, false);
    button.addEventListener("touchend", end, false);
    button.addEventListener("touchcancel", end, false);
  }
  button.addEventListener("keydown", function(event) {
    if ((event.key === "Enter" || event.key === " ") && !event.repeat) start(event);
  }, false);
  button.addEventListener("keyup", function(event) {
    if (event.key === "Enter" || event.key === " ") end(event);
  }, false);
  button.addEventListener("click", function(event) {
    if (button._notePointerCycle) return;
    noteOn(note, 96, "virtual");
    noteOff(note, "virtual");
  }, false);
}
function buttonFromEvent(event) {
  let node = event && event.target;
  while (node && node !== document) {
    if (node.tagName && String(node.tagName).toLowerCase() === "button") return node;
    node = node.parentElement;
  }
  return null;
}
function markButtonFeedback(button) {
  if (!button || button.disabled) return;
  let now = Date.now();
  if (button.dataset.feedbackAt && now - Number(button.dataset.feedbackAt) < 45) return;
  button.dataset.feedbackAt = String(now);
  button.classList.add("button-pressed");
  if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
    try {
      navigator.vibrate(10);
    } catch (e) {
    }
  }
  clearTimeout(button._feedbackTimer);
  button._feedbackTimer = setTimeout(() => button.classList.remove("button-pressed"), 150);
}
function setupButtonFeedback() {
  let start = (event) => markButtonFeedback(buttonFromEvent(event));
  let release = (event) => {
    let button = buttonFromEvent(event);
    if (button) button.classList.remove("button-pressed");
  };
  if (typeof window.PointerEvent === "function") {
    document.addEventListener("pointerdown", start, true);
  } else {
    document.addEventListener("mousedown", start, true);
    document.addEventListener("touchstart", start, { capture: true, passive: true });
  }
  document.addEventListener("keydown", (event) => {
    if (!event.repeat && (event.key === "Enter" || event.key === " ")) start(event);
  }, true);
  if (typeof window.PointerEvent === "function") {
    document.addEventListener("pointerup", release, true);
    document.addEventListener("pointercancel", release, true);
  } else {
    document.addEventListener("mouseup", release, true);
    document.addEventListener("touchend", release, true);
    document.addEventListener("touchcancel", release, true);
  }
  document.addEventListener("keyup", release, true);
}
function installInteractionStyles() {
  if (document.getElementById("notationLabInteractionStyles")) return;
  let style = document.createElement("style");
  style.id = "notationLabInteractionStyles";
  style.textContent = "button{transition:transform .08s ease,box-shadow .12s ease,background-color .12s ease,filter .12s ease;-webkit-tap-highlight-color:rgba(141,153,255,.28);touch-action:manipulation}button:focus-visible{outline:3px solid #aab1ff;outline-offset:3px}button:active,button.button-pressed{transform:translateY(1px) scale(.98);filter:brightness(1.18);box-shadow:0 0 0 3px rgba(141,153,255,.28),0 4px 14px rgba(20,30,54,.45)}button.button-pressed{background:#4f5ca0!important}.writing-score[hidden]{display:none!important}.training-score-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(235px,.72fr);gap:12px;align-items:stretch;margin:10px 0 14px}.training-score-column{min-width:0}.training-score-label{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#9faaff;margin:0 0 6px 3px}.target-score .score{margin:0}.played-score{background:#f8f9fc;border-radius:14px;padding:10px;color:#263650;min-height:190px;overflow:hidden}.played-score .training-score-label{color:#52607d;margin-left:0}.played-note-copy{display:grid;gap:3px;min-height:46px}.played-note-copy strong{font-size:20px;font-weight:800}.played-note-copy small{color:#52607d;font-size:12px}.played-note-staff{margin-top:8px;min-height:100px;overflow:auto}.played-note-staff svg{width:auto;max-width:none;height:auto;display:block}.played-note-pulse{animation:playedNotePulse .2s ease}@keyframes playedNotePulse{50%{box-shadow:0 0 0 5px rgba(141,153,255,.24)}}.layout-reservation{border:1px solid #34425c;border-radius:12px;background:rgba(13,22,39,.55);color:#8495b7;min-height:92px;padding:12px;text-align:center}.layout-reservation>span{display:block;font-size:11px;letter-spacing:.05em;text-transform:uppercase}.layout-reservation ins{display:block}.top-reservation{margin:0 0 18px;min-height:78px}.side-reservation{margin-top:18px;min-height:250px;display:flex;flex-direction:column;justify-content:center}@media(max-width:850px){.training-score-row{grid-template-columns:1fr}.played-score{min-height:170px}.side-reservation{min-height:120px}}";
  document.head.append(style);
}
const trainingTabs = ["read", "sight", "rhythm", "compose", "ear"];
let liveNotesByTab = /* @__PURE__ */ new Map();
function ensureTrainingDisplays() {
  for (let tabName of trainingTabs) {
    let score = $(tabName + "Score");
    if (!score || score.parentElement && score.parentElement.classList.contains("training-score-row")) continue;
    let row = document.createElement("div");
    row.className = "training-score-row";
    let target = document.createElement("div");
    target.className = "training-score-column target-score";
    target.innerHTML = '<div class="training-score-label">Target + played on one stave</div>';
    let played = document.createElement("div");
    played.className = "training-score-column played-score";
    played.id = tabName + "Played";
    played.setAttribute("aria-live", "polite");
    played.innerHTML = '<div class="training-score-label">Played note</div><div class="played-note-copy"><strong class="played-note-name">Waiting for a note\u2026</strong><small class="played-note-meta">Play a note while this tab is open.</small></div><div class="played-note-staff" aria-label="Played note notation"></div>';
    score.parentNode.insertBefore(row, score);
    row.append(target, played);
    target.append(score);
  }
}
function ensureAdSlots() {
  let config = window.NOTATION_ADS || {}, providerReady = !!(config.enabled && config.certifiedCmpConfigured && /^ca-pub-\d{16}$/.test(config.publisherId) && /^\d+$/.test(config.slotId));
  let top = $("top-layout-reservation");
  if (top) {
    top.hidden = false;
    top.className = "layout-reservation top-reservation";
    top.setAttribute("aria-label", "Advertising space reserved");
    let label = top.querySelector("span");
    if (label) label.textContent = "Advertising space reserved";
    if (providerReady) {
      top.setAttribute("data-ad-container", "true");
      if (!top.querySelector("ins.adsbygoogle")) top.insertAdjacentHTML("beforeend", '<ins class="adsbygoogle" data-ad-format="auto" data-full-width-responsive="true"></ins>');
    }
    let hero = document.querySelector(".hero");
    if (hero && top.parentNode) hero.parentNode.insertBefore(top, hero.nextSibling);
  }
  for (let tabName of trainingTabs) {
    let panel = $(tabName);
    let aside = panel && panel.querySelector(".grid > aside");
    if (!aside || aside.querySelector(".side-reservation")) continue;
    let slot = document.createElement("aside");
    slot.className = "layout-reservation side-reservation";
    slot.setAttribute("aria-label", "Advertising space reserved");
    slot.innerHTML = "<span>Advertising space reserved</span>";
    if (providerReady) {
      slot.setAttribute("data-ad-container", "true");
      slot.insertAdjacentHTML("beforeend", '<ins class="adsbygoogle" data-ad-format="auto" data-full-width-responsive="true"></ins>');
    }
    aside.append(slot);
  }
  if (typeof window.NotationLabAdsRefresh === "function") window.NotationLabAdsRefresh();
}
let playedRenderKeys = /* @__PURE__ */ new Map();
function renderTrainingPlayed(tabName, payload) {
  let panel = $(tabName + "Played");
  if (!panel) return;
  let name = panel.querySelector(".played-note-name"), meta = panel.querySelector(".played-note-meta"), score = panel.querySelector(".played-note-staff");
  if (!payload) {
    if (name) name.textContent = "Waiting for a note\u2026";
    if (meta) meta.textContent = "Play a note while this tab is open.";
    if (score) score.innerHTML = "";
    playedRenderKeys.delete(tabName);
    panel.classList.remove("played-note-pulse");
    if (typeof renderTrainingComparison === "function") renderTrainingComparison(tabName, null);
    return;
  }
  if (name) name.textContent = payload.phase === "released" ? `${midiName(payload.n)} \xB7 ${payload.beats} beat${payload.beats === 1 ? "" : "s"}` : `${midiName(payload.n)} \xB7 playing`;
  if (meta) meta.textContent = `${liveSourceLabel(payload.source)} \xB7 velocity ${Math.round(payload.velocity)}${payload.articulation ? " \xB7 " + payload.articulation : ""}`;
  let renderKey = [payload.n, Math.round(payload.velocity), payload.source, payload.phase, payload.beats, payload.articulation].join("|");
  if (score && typeof engrave === "function" && (playedRenderKeys.get(tabName) !== renderKey || !score.firstElementChild)) {
    try {
      engrave(score, [{ midi: payload.n, beats: Math.max(0.125, payload.beats), velocity: payload.velocity, articulation: payload.articulation }], "treble", -1);
      playedRenderKeys.set(tabName, renderKey);
    } catch (error) {
      score.textContent = midiName(payload.n);
      playedRenderKeys.set(tabName, renderKey);
    }
  }
  panel.classList.remove("played-note-pulse");
  void panel.offsetWidth;
  panel.classList.add("played-note-pulse");
  if (typeof renderTrainingComparison === "function") renderTrainingComparison(tabName, payload);
}
function renderTrainingComparison(tabName, payload) {
  let score = $(tabName + "Score");
  if (!score || typeof notationLabComparison !== "function") return;
  let target = null, clef = "treble", highlight = -1;
  if (tabName === "read" && readTarget !== null) {
    target = [readTarget];
    clef = readClef;
    highlight = 0;
  } else if (tabName === "sight" && Array.isArray(sightSeq)) {
    target = sightSeq;
    clef = $("sightClef") ? $("sightClef").value : "treble";
    highlight = sightPos;
  } else if (tabName === "ear" && Array.isArray(earSeq) && earLocked) {
    target = earSeq;
    clef = "treble";
  }
  if (!target) return;
  notationLabComparison(score, target, payload, clef, highlight, hintEnabled);
}
const $ = (id) => document.getElementById(id);
const names = ["C", "C\u266F", "D", "D\u266F", "E", "F", "F\u266F", "G", "G\u266F", "A", "A\u266F", "B"];
const natural = ["C", "D", "E", "F", "G", "A", "B"];
const midiName = (n) => names[(n % 12 + 12) % 12] + (Math.floor(n / 12) - 1);
const noteLetter = (n) => names[(n % 12 + 12) % 12][0];
const pitchClass = (n) => (n % 12 + 12) % 12;
const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
let audio, access, midiInputs = /* @__PURE__ */ new Map(), currentTab = "read", readTarget = null, readClef = "treble", readLocked = false, readStats = { correct: 0, attempts: 0, streak: 0 }, sightSeq = [], sightPos = 0, sightErrors = 0, sightRuns = 0, composition = [], earSeq = [], earPos = 0, earLocked = false, earStats = { correct: 0, attempts: 0, streak: 0 }, rhythmTimer = null, rhythmStart = 0, rhythmTaps = [], beatNum = 0, activeNotes = /* @__PURE__ */ new Set();
let rhythmActive = false, rhythmMetronomeOn = false, sightRangeKey = "", hintEnabled = false, autoComposerClef = "treble";
let composerActive = /* @__PURE__ */ new Map(), midiSustain = false, computerHeld = /* @__PURE__ */ new Map(), lastInputSource = "ready", composerLastEndAt = 0, composerChordGroup = null, composerPreviewKey = "";
let keyboardNotesByMidi = /* @__PURE__ */ new Map(), beatNodes = [], rhythmRenderKey = "", compositionRenderKey = "";
const inputSubscribers = { NOTE_ON: [], NOTE_OFF: [], TAP: [], SUSTAIN: [] };
function onCanonicalInput(type, handler) {
  if (!inputSubscribers[type] || typeof handler !== "function") return function() {
  };
  inputSubscribers[type].push(handler);
  return () => {
    let list = inputSubscribers[type], index = list.indexOf(handler);
    if (index >= 0) list.splice(index, 1);
  };
}
function emitCanonicalInput(type, detail) {
  let list = inputSubscribers[type];
  if (!list) return;
  list.slice().forEach((handler) => {
    try {
      handler(detail);
    } catch (e) {
    }
  });
}
if (typeof window !== "undefined") window.NotationLabInput = { on: onCanonicalInput };
const weeks = [["The musical alphabet", "Staff, clefs, ledger lines and instant note recognition."], ["Rhythm and timing", "Durations, rests, barlines, counting and dictation."], ["Keys and accidentals", "Sharps, flats, naturals and major scales."], ["Intervals and chords", "Intervals, triads, inversions and chord recognition."], ["Two-clef reading", "Grand staff, bass notation and sight-reading."], ["Writing real music", "Beaming, ties, slurs, dynamics and engraving."], ["Advanced rhythm", "Compound metre, syncopation, triplets and semiquavers."], ["Musicianship", "Transcription, sight-reading and original composition."]];
const practice = ["5 min \xB7 Note recognition", "5 min \xB7 Rhythm reading", "10 min \xB7 Sight-reading", "5 min \xB7 Write a melody", "5 min \xB7 Ear training"];
function store() {
  try {
    localStorage.setItem("notationLab", JSON.stringify({ readStats, earStats, sightRuns, composition, sightErrors, metres: $("metres").value, rhythmTaps }));
  } catch (e) {
  }
}
function restore() {
  try {
    let s = JSON.parse(localStorage.getItem("notationLab") || "{}");
    if (s.metres) $("metres").value = s.metres;
    rhythmTaps = Array.isArray(s.rhythmTaps) ? s.rhythmTaps.filter(Number.isFinite) : [];
    readStats = s.readStats || readStats;
    earStats = s.earStats || earStats;
    sightRuns = s.sightRuns || 0;
    sightErrors = s.sightErrors || 0;
    composition = Array.isArray(s.composition) ? s.composition.filter((x) => {
      if (!x || ![0.125, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6].includes(x.beats)) return false;
      if (x.rest === true) return true;
      return compositionMidis(x).length > 0;
    }) : [];
  } catch (e) {
  }
}
function getAudio() {
  if (audio === false) return null;
  if (!audio) {
    let AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (typeof AudioCtor !== "function") {
      audio = false;
      return null;
    }
    try {
      audio = new AudioCtor();
    } catch (e) {
      audio = false;
      return null;
    }
  }
  if (audio && audio.state === "suspended" && audio.resume) {
    let resumed = audio.resume();
    if (resumed && resumed.catch) resumed.catch(function() {
    });
  }
  return audio;
}
function sound(n, d = 0.35, when = 0, type = "triangle", vol = 0.13) {
  let a = getAudio();
  if (!a || !a.createOscillator || !a.createGain) return;
  let t = a.currentTime + when, o = a.createOscillator(), g = a.createGain();
  o.type = type;
  o.frequency.value = 440 * Math.pow(2, (n - 69) / 12);
  g.gain.setValueAtTime(1e-4, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.018);
  g.gain.exponentialRampToValueAtTime(1e-4, t + Math.max(0.07, d));
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + Math.max(0.07, d) + 0.02);
}
function clickSound(accent = false) {
  let a = getAudio();
  if (!a || !a.createOscillator || !a.createGain) return;
  let t = a.currentTime, o = a.createOscillator(), g = a.createGain();
  o.type = "sine";
  o.frequency.value = accent ? 1e3 : 660;
  g.gain.setValueAtTime(0.15, t);
  g.gain.exponentialRampToValueAtTime(1e-4, t + 0.055);
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + 0.06);
}
function staffSvg(notes, clef = "treble", highlight = -1, opts = {}) {
  const W = 750, H = 190, x0 = 85, x1 = 735, base = 140, step = 12, mid = clef === "bass" ? 43 : 64, diat = (n) => {
    let octave2 = Math.floor(n / 12) - 1, letter = noteLetter(n), i = natural.indexOf(letter);
    return octave2 * 7 + i;
  }, yFor = (n) => base - (diat(n) - diat(mid)) * step;
  let out = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Music staff showing ${notes.length} notes">`;
  for (let j = 0; j < 5; j++) out += `<line x1="28" y1="${base - j * 24}" x2="735" y2="${base - j * 24}" stroke="#33425a" stroke-width="1.5"/>`;
  out += `<text x="32" y="${clef === "bass" ? 111 : 151}" font-size="${clef === "bass" ? 88 : 100}" fill="#273650" font-family="Georgia,serif">${clef === "bass" ? "\u{1D122}" : "\u{1D11E}"}</text>`;
  let xstep = Math.min(70, Math.max(28, 630 / Math.max(1, notes.length)));
  notes.forEach((it, i) => {
    let n = typeof it === "number" ? it : it.midi, dur = typeof it === "number" ? 1 : it.beats, x = 105 + i * xstep, y = yFor(n), selected = i === highlight;
    for (let yy = base + 24; yy <= y + 2; yy += 24) out += `<line x1="${x - 15}" y1="${yy}" x2="${x + 16}" y2="${yy}" stroke="#35435b" stroke-width="1.6"/>`;
    for (let yy = base - 120; yy >= y - 2; yy -= 24) out += `<line x1="${x - 15}" y1="${yy}" x2="${x + 16}" y2="${yy}" stroke="#35435b" stroke-width="1.6"/>`;
    if (selected) out += `<rect x="${x - 19}" y="7" width="38" height="164" rx="8" fill="#d8dafa"/>`;
    let pc = pitchClass(n), acc = [1, 3, 6, 8, 10].includes(pc);
    if (acc) out += `<text x="${x - 23}" y="${y + 7}" font-size="26" fill="#35435b">\u266F</text>`;
    out += `<ellipse cx="${x}" cy="${y}" rx="11" ry="7.2" transform="rotate(-18 ${x} ${y})" fill="${dur >= 2 ? "#f8f9fc" : selected ? "#6b6ef4" : "#263a60"}" stroke="#263a60" stroke-width="2"/>`;
    if (dur !== 4) {
      out += `<line x1="${x + 10}" y1="${y}" x2="${x + 10}" y2="${y - 39}" stroke="#263a60" stroke-width="2.3"/>`;
      if (dur === 0.5) out += `<path d="M ${x + 10} ${y - 39} q 25 12 10 28" fill="none" stroke="#263a60" stroke-width="2.4"/>`;
    }
    if (opts.labels) out += `<text x="${x}" y="184" font-size="13" text-anchor="middle" fill="#263a60">${midiName(n)}</text>`;
  });
  out += "</svg>";
  return out;
}
function flash(n) {
  let el = keyboardNotesByMidi.get(n);
  if (!el) return;
  el.classList.add("pressed");
  setTimeout(() => el.classList.remove("pressed"), 160);
}
function liveSourceLabel(source) {
  return source === "midi" ? "MIDI keyboard" : source === "computer" ? "computer keyboard" : source === "virtual" ? "on-screen keyboard" : "input";
}
function renderLiveInput(n, velocity = 96, source = "input", phase = "playing", beats = 1, articulation = "") {
  let payload = { n, velocity, source, phase, beats, articulation };
  liveNotesByTab.set(currentTab, payload);
  emitCanonicalInput(phase === "released" ? "NOTE_OFF" : "NOTE_ON", payload);
  renderTrainingPlayed(currentTab, payload);
  if (currentTab === "compose") {
    let feedback = $("composeFeedback");
    if (feedback) feedback.textContent = phase === "released" ? `Captured ${midiName(n)} \xB7 ${beats} beat${beats === 1 ? "" : "s"}` : `Playing ${midiName(n)} \xB7 hold to set duration`;
  }
}
function quantizeComposerBeats(milliseconds, source) {
  let bpmEl = $("bpm"), bpm = bpmEl ? Math.max(40, Math.min(180, +bpmEl.value || 80)) : 80, quarter = 6e4 / bpm, raw = Math.max(0.03125, milliseconds / quarter);
  let performed = source === "virtual" && raw < 0.0625 ? 0.25 : source === "computer" && raw < 0.0625 ? 0.25 : raw;
  let values = [0.125, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6], best = values[0];
  for (let value of values) if (Math.abs(value - performed) < Math.abs(best - performed)) best = value;
  return best;
}
function composerArticulation(velocity, beats) {
  if (velocity >= 112) return "accent";
  if (beats <= 0.25) return "staccato";
  if (velocity <= 42) return "soft";
  return "";
}
function flushComposerChordGroup() {
  let group = composerChordGroup;
  composerChordGroup = null;
  if (!group || !group.entries.length) return;
  if (group.timer) clearTimeout(group.timer);
  let midis = group.entries.map((entry) => entry.midi), beats = group.entries.reduce((sum, entry) => sum + entry.beats, 0) / group.entries.length, velocity = Math.max(...group.entries.map((entry) => entry.velocity)), articulation = composerArticulation(velocity, beats);
  addComposition(midis.length > 1 ? midis : midis[0], beats, velocity, articulation);
}
function queueComposerEntry(entry) {
  if (!composerChordGroup || entry.startedAt - composerChordGroup.startedAt > 75) {
    flushComposerChordGroup();
    composerChordGroup = { startedAt: entry.startedAt, entries: [], timer: null };
  }
  composerChordGroup.entries.push(entry);
  clearTimeout(composerChordGroup.timer);
  composerChordGroup.timer = setTimeout(flushComposerChordGroup, 90);
}
function commitComposerNote(entry, endedAt) {
  let beats = quantizeComposerBeats(Math.max(1, endedAt - entry.startedAt), entry.source), articulation = composerArticulation(entry.velocity, beats);
  if (composerLastEndAt && entry.startedAt - composerLastEndAt > 80) {
    let restBeats = quantizeComposerBeats(entry.startedAt - composerLastEndAt, entry.source);
    if (restBeats >= 0.25) addCompositionRest(restBeats);
  }
  composerLastEndAt = Math.max(composerLastEndAt, endedAt);
  queueComposerEntry({ midi: entry.midi, beats, velocity: entry.velocity, articulation, startedAt: entry.startedAt });
  renderLiveInput(entry.midi, entry.velocity, entry.source, "released", beats, articulation);
}
function finishComposerNote(n, source, endedAt = performance.now()) {
  let entry = composerActive.get(n);
  if (!entry || source && entry.source !== source && source !== "midi") return;
  composerActive.delete(n);
  if (entry.timer) clearTimeout(entry.timer);
  commitComposerNote(entry, endedAt);
}
function releaseSustainedComposerNotes() {
  for (let [n, entry] of composerActive) if (entry.releasedAt !== void 0) finishComposerNote(n, entry.source, entry.releasedAt);
}
function startComposerNote(n, velocity, source) {
  if (composerActive.has(n)) finishComposerNote(n, source);
  let entry = { midi: n, velocity: Math.max(1, Math.min(127, velocity || 96)), source, startedAt: performance.now(), releasedAt: void 0, timer: null };
  entry.timer = setTimeout(() => {
    if (composerActive.get(n) === entry) finishComposerNote(n, source, performance.now());
  }, 5e3);
  composerActive.set(n, entry);
  renderCompositionPreview();
}
function noteOff(n, source = "input") {
  if (!Number.isInteger(n) || n < 0 || n > 127) return;
  activeNotes.delete(n);
  let entry = composerActive.get(n);
  if (!entry) {
    let previous = liveNotesByTab.get(currentTab);
    let velocity = previous && previous.n === n ? previous.velocity : 96;
    let beats = previous && previous.n === n && Number.isFinite(previous.beats) ? previous.beats : 0.25;
    let articulation = previous && previous.n === n ? previous.articulation || "" : "";
    renderLiveInput(n, velocity, source, "released", beats, articulation);
    return;
  }
  if (entry && source === "midi" && midiSustain) {
    entry.releasedAt = performance.now();
    renderLiveInput(n, entry.velocity, source, "released", quantizeComposerBeats(entry.releasedAt - entry.startedAt, source), "sustain");
  } else finishComposerNote(n, source);
}
function noteOn(n, velocity = 96, source = "input") {
  if (!Number.isInteger(n) || n < 0 || n > 127) return;
  lastInputSource = source;
  activeNotes.add(n);
  flash(n);
  if ((source === "virtual" || source === "computer") && typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
    try {
      navigator.vibrate(8);
    } catch (e) {
    }
  }
  sound(n);
  renderLiveInput(n, velocity, source, "playing", 1, composerArticulation(velocity, 1));
  if (currentTab === "read") checkRead(n);
  else if (currentTab === "sight") checkSight(n);
  else if (currentTab === "compose") startComposerNote(n, velocity, source);
  else if (currentTab === "ear") checkEar(n);
  else if (currentTab === "rhythm") tapBeat();
}
let midiRequest = null, midiRetryTimer = null;
function setMidiStatus(message, connected) {
  let status = $("midiStatus"), dot = $("midiDot");
  if (status) status.textContent = message;
  if (dot) dot.classList.toggle("on", !!connected);
}
function midiMessage(e) {
  let data = e && e.data ? Array.from(e.data) : [], status = Number(data[0]) || 0, type = status & 240, n = Number(data[1]), vel = Number(data[2]) || 0;
  if (type === 144) {
    if (vel > 0) noteOn(n, vel, "midi");
    else noteOff(n, "midi");
  } else if (type === 128) noteOff(n, "midi");
  else if (type === 176 && Number(data[1]) === 64) {
    midiSustain = vel >= 64;
    emitCanonicalInput("SUSTAIN", { down: midiSustain, source: "midi", velocity: vel });
    if (!midiSustain) releaseSustainedComposerNotes();
  }
}
function forEachMidiInput(callback) {
  if (!access || !access.inputs || typeof callback !== "function") return;
  if (typeof access.inputs.forEach === "function") {
    access.inputs.forEach(callback);
  } else if (typeof access.inputs.values === "function") {
    for (let input of access.inputs.values()) callback(input);
  }
}
function midiInputLabel(input) {
  let name = input && input.name ? String(input.name).trim() : "";
  let manufacturer = input && input.manufacturer ? String(input.manufacturer).trim() : "";
  return name || manufacturer || "MIDI keyboard";
}
function detachMidiInput(input) {
  if (!input) return;
  if (typeof input.removeEventListener === "function") input.removeEventListener("midimessage", midiMessage);
  if (input.onmidimessage === midiMessage) input.onmidimessage = null;
}
function attachMidi() {
  if (!access) return;
  let current = /* @__PURE__ */ new Set(), labels = [];
  forEachMidiInput((input) => {
    if (!input || input.id === void 0) return;
    let id = String(input.id);
    current.add(id);
    labels.push(midiInputLabel(input));
    if (!midiInputs.has(id)) {
      if (typeof input.addEventListener === "function") input.addEventListener("midimessage", midiMessage);
      else input.onmidimessage = midiMessage;
      midiInputs.set(id, input);
    }
  });
  for (let [id, input] of midiInputs) {
    if (!current.has(String(id))) {
      detachMidiInput(input);
      midiInputs.delete(id);
    }
  }
  let n = current.size;
  if (n) {
    let shown = labels.filter((label, index) => labels.indexOf(label) === index).join(", ");
    setMidiStatus(`${n} MIDI input${n === 1 ? "" : "s"} connected${shown ? " \xB7 " + shown : ""}`, true);
    $("connectMidi").textContent = "Rescan MIDI";
  } else {
    setMidiStatus("MIDI ready \xB7 connect a keyboard", false);
    $("connectMidi").textContent = "Connect MIDI";
  }
}
function scheduleMidiRetry() {
  if (midiRetryTimer || access || !navigator.requestMIDIAccess) return;
  midiRetryTimer = setTimeout(() => {
    midiRetryTimer = null;
    requestMidi(false);
  }, 15e3);
}
function requestMidi(manual) {
  if (access) {
    attachMidi();
    return midiRequest;
  }
  if (!navigator.requestMIDIAccess) {
    setMidiStatus("Web MIDI unavailable in this browser", false);
    $("connectMidi").textContent = "Use on-screen keys";
    $("connectMidi").disabled = true;
    return null;
  }
  if (midiRequest) return midiRequest;
  setMidiStatus(manual ? "Requesting MIDI access\u2026" : "Detecting MIDI keyboard\u2026", false);
  try {
    midiRequest = navigator.requestMIDIAccess({ sysex: false });
  } catch (error) {
    midiRequest = null;
    setMidiStatus("MIDI blocked \xB7 allow MIDI access for this site", false);
    scheduleMidiRetry();
    return null;
  }
  midiRequest.then((result) => {
    midiRequest = null;
    access = result;
    access.onstatechange = attachMidi;
    attachMidi();
  }, (error) => {
    midiRequest = null;
    let blocked = error && (error.name === "SecurityError" || error.name === "NotAllowedError" || error.name === "InvalidAccessError");
    setMidiStatus(blocked ? "MIDI blocked \xB7 allow MIDI access for this site" : "MIDI unavailable \xB7 use on-screen keys", false);
    $("connectMidi").textContent = "Connect MIDI";
    scheduleMidiRetry();
  });
  return midiRequest;
}
function connectMidi() {
  return requestMidi(true);
}
function randomNote(clef, level) {
  let min = clef === "bass" ? 43 : 64, max = clef === "bass" ? 57 : 77;
  if (level !== "easy") {
    min -= 4;
    max += 4;
  }
  let n = rand(min, max);
  if (level !== "hard") while ([1, 3, 6, 8, 10].includes(pitchClass(n))) n = rand(min, max);
  return n;
}
function visibleKeyboardRange() {
  let start = octave * 12 + 12, end = Math.min(127, start + 16);
  return { start, end };
}
function randomSightNote(clef, level) {
  let visible = visibleKeyboardRange(), baseMin = clef === "bass" ? 43 : 64, baseMax = clef === "bass" ? 57 : 77;
  if (level !== "easy") {
    baseMin -= 4;
    baseMax += 4;
  }
  let min = Math.max(0, Math.min(baseMin, visible.start)), max = Math.min(127, Math.max(baseMax, visible.end));
  min = Math.max(min, visible.start);
  max = Math.min(max, visible.end);
  if (min > max) {
    min = visible.start;
    max = visible.end;
  }
  let candidates = [];
  for (let n = min; n <= max; n++) if (level === "hard" || ![1, 3, 6, 8, 10].includes(pitchClass(n))) candidates.push(n);
  if (!candidates.length) for (let n = min; n <= max; n++) candidates.push(n);
  return candidates[rand(0, candidates.length - 1)];
}
function renderRead() {
  if (readTarget === null) return;
  $("readScore").innerHTML = staffSvg([readTarget], readClef, 0, { labels: hintEnabled });
  $("readFeedback").className = "answer";
  if (liveNotesByTab.has("read")) renderTrainingComparison("read", liveNotesByTab.get("read"));
}
function newRead() {
  readClef = $("clef").value === "mixed" ? Math.random() < 0.5 ? "bass" : "treble" : $("clef").value;
  readTarget = randomNote(readClef, $("difficulty").value);
  readLocked = false;
  liveNotesByTab.delete("read");
  renderTrainingPlayed("read", null);
  renderRead();
  $("readFeedback").textContent = "Play the displayed note.";
}
function checkRead(n) {
  if (readLocked) return;
  readStats.attempts++;
  let ok = pitchClass(n) === pitchClass(readTarget);
  if (ok) {
    readStats.correct++;
    readStats.streak++;
    readLocked = true;
    $("readFeedback").textContent = `Correct! ${midiName(readTarget)} \xB7 Press Next note`;
    $("readFeedback").className = "answer good";
  } else {
    readStats.streak = 0;
    $("readFeedback").textContent = `Not quite: you played ${midiName(n)}. Try again.`;
    $("readFeedback").className = "answer bad";
  }
  updateRead();
  store();
}
function updateRead() {
  $("correct").textContent = readStats.correct;
  $("attempts").textContent = readStats.attempts;
  $("streak").textContent = readStats.streak;
  let pct = readStats.attempts ? Math.round(readStats.correct / readStats.attempts * 100) : 0;
  $("accuracyBar").style.width = pct + "%";
  $("accuracyText").textContent = pct + "% correct";
}
function newSight() {
  let c = $("sightClef").value;
  sightSeq = Array.from({ length: +$("sightLength").value }, () => randomSightNote(c, "easy"));
  sightPos = 0;
  liveNotesByTab.delete("sight");
  renderTrainingPlayed("sight", null);
  $("sightFeedback").textContent = "Play the highlighted note to start.";
  renderSight();
}
function renderSight() {
  $("sightScore").innerHTML = staffSvg(sightSeq, $("sightClef").value, sightPos);
  $("sightDone").textContent = sightPos;
  $("sightErrors").textContent = sightErrors;
  $("sightRuns").textContent = sightRuns;
  if (liveNotesByTab.has("sight")) renderTrainingComparison("sight", liveNotesByTab.get("sight"));
}
function checkSight(n) {
  if (sightPos >= sightSeq.length) return;
  if (pitchClass(n) === pitchClass(sightSeq[sightPos])) {
    sightPos++;
    if (sightPos === sightSeq.length) {
      sightRuns++;
      $("sightFeedback").textContent = "Melody complete! Generate another.";
      $("sightFeedback").className = "answer good";
    } else {
      $("sightFeedback").textContent = `Correct. Note ${sightPos + 1} of ${sightSeq.length}`;
      $("sightFeedback").className = "answer good";
    }
  } else {
    sightErrors++;
    $("sightFeedback").textContent = "Different pitch. Try the highlighted note again.";
    $("sightFeedback").className = "answer bad";
  }
  renderSight();
  store();
}
function compositionMidis(item) {
  if (!item || item.rest) return [];
  if (Array.isArray(item.midis)) return item.midis.filter((n) => Number.isInteger(n) && n >= 0 && n <= 127);
  return Number.isInteger(item.midi) ? [item.midi] : [];
}
function composerClefFor(items) {
  let values = [];
  (items || []).forEach((item) => compositionMidis(item).forEach((value) => values.push(value)));
  if (!values.length) return "treble";
  let average = values.reduce((sum, n) => sum + n, 0) / values.length;
  if (average < 57) autoComposerClef = "bass";
  else if (average > 63) autoComposerClef = "treble";
  return autoComposerClef;
}
function currentComposerClef(items = composition) {
  let control = $("composeClef");
  return control && control.value === "auto" ? composerClefFor(items) : control ? control.value : composerClefFor(items);
}
function updateComposerTips() {
  let tip = $("compose") && $("compose").querySelector("aside p.small");
  if (!tip) return;
  let notes = composition.filter((item) => !item.rest), pitches = [];
  notes.forEach((item) => compositionMidis(item).forEach((midi) => pitches.push(midi)));
  if (!pitches.length) {
    tip.textContent = "Start with a short motif. Hold each key for the duration you want written; release between phrases to create rests. Auto clef follows the performed register.";
    return;
  }
  let min = Math.min(...pitches), max = Math.max(...pitches), distinctDurations = [];
  notes.forEach((item) => {
    if (distinctDurations.indexOf(item.beats) < 0) distinctDurations.push(item.beats);
  });
  let advice = notes.length < 4 ? "Develop the motif with repetition and a small variation." : distinctDurations.length < 2 ? "Add rhythmic contrast with a held note or shorter subdivision." : "Check the phrase contour and leave space before the cadence.";
  tip.textContent = `${notes.length} performed note${notes.length === 1 ? "" : "s"} \xB7 range ${midiName(min)}\u2013${midiName(max)} \xB7 ${advice}`;
}
function addComposition(n, beatsOverride, velocity = 96, articulation = "") {
  let durationEl = $("duration"), beats = beatsOverride === void 0 ? durationEl ? +durationEl.value : 1 : beatsOverride;
  let midis = Array.isArray(n) ? n.filter((value) => Number.isInteger(value) && value >= 0 && value <= 127) : [n];
  if (!midis.length) return;
  let item = { beats, velocity: Math.max(1, Math.min(127, velocity || 96)), articulation: articulation || "" };
  if (midis.length > 1) item.midis = midis;
  else item.midi = midis[0];
  composition.push(item);
  renderComposition();
  store();
}
function addCompositionRest(beats) {
  let value = Math.max(0.125, Number(beats) || 0);
  if (!value) return;
  composition.push({ rest: true, beats: value });
  renderComposition();
  store();
}
function playSequence(seq, tempo = 95) {
  let offset = 0;
  seq.forEach((x) => {
    let d = x.beats * 60 / tempo;
    compositionMidis(x).forEach((n) => sound(n, Math.max(0.12, d * 0.87), offset));
    offset += d;
  });
}
function vlq(n) {
  let a = [n & 127];
  while ((n >>= 7) > 0) a.unshift(n & 127 | 128);
  return a;
}
function exportMidi() {
  if (!composition.length) return;
  let bytes = [77, 84, 104, 100, 0, 0, 0, 6, 0, 0, 0, 1, 0, 96, 77, 84, 114, 107];
  let events = [0, 255, 81, 3, 9, 39, 192], pending = 0;
  composition.forEach((x) => {
    let ticks = Math.round(x.beats * 96);
    events.push(...vlq(pending), 144, x.midi, 90, ...vlq(ticks), 128, x.midi, 0);
    pending = 0;
  });
  events.push(0, 255, 47, 0);
  let len = events.length;
  bytes.push(len >>> 24 & 255, len >>> 16 & 255, len >>> 8 & 255, len & 255, ...events);
  let url = URL.createObjectURL(new Blob([new Uint8Array(bytes)], { type: "audio/midi" }));
  let a = document.createElement("a");
  a.href = url;
  a.download = "notation-lab-composition.mid";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function newEar() {
  let root = rand(60, 71);
  earSeq = $("earMode").value === "interval" ? [root, Math.min(83, root + rand(2, 9))] : [root];
  earPos = 0;
  earLocked = false;
  liveNotesByTab.delete("ear");
  renderTrainingPlayed("ear", null);
  $("earFeedback").textContent = "Listen, then play the answer.";
  $("earFeedback").className = "answer";
  $("earScore").innerHTML = staffSvg([], "treble");
  setTimeout(playEar, 100);
}
function playEar() {
  sound(60, 0.35, 0, "sine", 0.1);
  earSeq.forEach((n, i) => sound(n, 0.5, 0.7 + i * 0.7));
}
function checkEar(n) {
  if (earLocked) return;
  earStats.attempts++;
  if (pitchClass(n) === pitchClass(earSeq[earPos])) {
    earPos++;
    if (earPos === earSeq.length) {
      earStats.correct++;
      earStats.streak++;
      earLocked = true;
      $("earFeedback").textContent = "Correct! " + earSeq.map(midiName).join(" \u2192 ");
      $("earFeedback").className = "answer good";
      $("earScore").innerHTML = staffSvg(earSeq, "treble", -1, { labels: true });
    } else {
      $("earFeedback").textContent = "First note correct. Now play the second.";
      $("earFeedback").className = "answer good";
    }
  } else {
    earStats.streak = 0;
    earPos = 0;
    $("earFeedback").textContent = "Not quite. Listen and try again.";
    $("earFeedback").className = "answer bad";
  }
  updateEar();
  store();
}
function updateEar() {
  $("earCorrect").textContent = earStats.correct;
  $("earAttempts").textContent = earStats.attempts;
  $("earStreak").textContent = earStats.streak;
}
function tab(name) {
  if (currentTab !== name && composerActive.size) {
    for (let [n, entry] of composerActive) finishComposerNote(n, entry.source, entry.releasedAt === void 0 ? performance.now() : entry.releasedAt);
  }
  if (currentTab !== name) {
    for (let [key, n] of computerHeld) noteOff(n, "computer");
    computerHeld.clear();
    activeNotes.clear();
    liveNotesByTab.delete(name);
    renderTrainingPlayed(name, null);
  }
  if (currentTab !== name) flushPracticeProgress();
  currentTab = name;
  document.querySelectorAll(".tab").forEach((x) => x.classList.toggle("hidden", x.id !== name));
  document.querySelectorAll("#tabs button").forEach((x) => x.classList.toggle("active", x.dataset.tab === name));
  renderTrainingPlayed(name, liveNotesByTab.get(name));
  const titles = { read: ["Learn notation by playing it.", "Read a note on the staff, then play it on your MIDI keyboard. Build speed and accuracy."], sight: ["Sight-read actual melodies.", "Follow the highlighted note through an unfamiliar phrase, without needing to memorise it first."], rhythm: ["Train your internal clock.", "Learn written rhythms by tapping against a metronome and measuring timing accuracy."], compose: ["Write music by performing it.", "Enter notes with your MIDI keyboard, play your composition and export it to Logic Pro."], ear: ["Connect sound to notation.", "Hear a note or interval, reproduce it and strengthen your musical ear."], roadmap: ["Your eight-week learning path.", "Follow a structured course with 30 minutes of deliberate practice per day."] };
  $("heroTitle").textContent = titles[name][0];
  $("heroDesc").textContent = titles[name][1];
  if (name !== "rhythm" && rhythmTimer) startRhythm();
}
let octave = 4, selectedNote = -1, meterIndex = 0, pulse = 0, expectedTaps = [], nextPulse = 0;
function parseMetres(text) {
  return text.split(",").map((raw) => {
    let t = raw.trim().replace(/^C$/, "4/4").replace(/^cut$/i, "2/2");
    let m = t.match(/^(\d+(?:\+\d+)*)\/(1|2|4|8|16|32|64)$/);
    if (!m) throw Error("Use 7/8, 2+2+3/8, or 4/4, 6/8, 5/4. Denominators: 1\u201364, powers of two.");
    let groups = m[1].split("+").map(Number), n = groups.reduce((a, b) => a + b, 0), d = +m[2];
    if (groups.some((x) => x < 1) || n > 64) throw Error("Each group must be positive; maximum 64 units per bar.");
    if (groups.length === 1) {
      if (n > 3 && n % 3 === 0 && d >= 8) groups = Array(n / 3).fill(3);
      else if (d >= 8 && n > 3 && n % 2 === 1) groups = [...Array((n - 3) / 2).fill(2), 3];
      else groups = Array(n).fill(1);
    }
    return { n, d, groups, label: m[1] + "/" + d, beats: n * 4 / d };
  });
}
function metres() {
  try {
    return parseMetres($("metres").value);
  } catch (e) {
    $("meterError").textContent = e.message;
    return [{ n: 4, d: 4, groups: [1, 1, 1, 1], label: "4/4", beats: 4 }];
  }
}
function setupAdvanced() {
  let box = document.createElement("div");
  box.className = "controls";
  box.innerHTML = '<label>Metre sequence <input id="metres" type="text" value="4/4" size="28" aria-label="Metre sequence"></label><select id="meterPreset" aria-label="Metre presets"><option value="4/4">Common 4/4</option><option>2/2</option><option>3/4</option><option>6/8</option><option>9/8</option><option>12/8</option><option>5/4</option><option>7/8</option><option>2+2+3/8</option><option>3+2/8</option><option>4/4, 7/8, 6/8</option><option>5/16</option></select><span id="meterError" role="status"></span>';
  $("rhythmScore").before(box);
  $("meterPreset").onchange = () => {
    $("metres").value = $("meterPreset").value;
    changeMetre();
  };
  $("metres").onchange = changeMetre;
  $("rhythm").querySelector("aside .small").textContent = "Tempo is crotchets per minute. Each light is one denominator unit. Compound metres group units in threes; additive metres accent the written groups. Comma-separated metres cycle bar by bar. Durations are measured in crotchets regardless of metre.";
  $("keyboard").previousElementSibling.lastElementChild.textContent = "A W S E D F T G Y H U J K O L P ; \xB7 Z down \xB7 X up";
  if (!$("composeClef").querySelector('option[value="auto"]')) $("composeClef").insertAdjacentHTML("afterbegin", '<option value="auto">Auto</option>');
  $("composeClef").value = "auto";
  $("duration").insertAdjacentHTML("beforeend", '<option value="0.25">Semiquaver</option><option value="0.125">Demisemiquaver</option><option value="0.75">Dotted quaver</option><option value="1.5">Dotted crotchet</option><option value="3">Dotted minim</option>');
  let durationLabel = $("duration").parentElement;
  if (durationLabel && durationLabel.firstChild) durationLabel.firstChild.textContent = "Manual length override ";
  let edit = document.createElement("div");
  edit.className = "controls";
  edit.innerHTML = '<label>Selected pitch (MIDI) <input id="editPitch" type="number" min="0" max="127" value="60"></label><button id="applyNote">Apply pitch and length</button><button id="deleteNote">Delete selected</button><button id="saveProgress">Export progress backup</button><label>Restore backup <input id="loadProgress" type="file" accept="application/json"></label><button id="aionProgress">Export Aion learning report</button><p id="integrationState" class="small">Your practice progress is saved in this browser.</p>';
  $("composeNotes").before(edit);
  $("applyNote").onclick = () => {
    let n = +$("editPitch").value;
    if (composition[selectedNote] && Number.isInteger(n) && n >= 0 && n <= 127) {
      composition[selectedNote] = __spreadProps2(__spreadValues2({}, composition[selectedNote]), { midi: n, midis: void 0, rest: false, beats: +$("duration").value });
      renderComposition();
      store();
    }
  };
  $("deleteNote").onclick = () => {
    if (composition[selectedNote]) {
      composition.splice(selectedNote, 1);
      selectedNote = -1;
      renderComposition();
      store();
    }
  };
  $("saveProgress").onclick = () => {
    store();
    download("notation-lab-progress.json", JSON.stringify({ version: 2, storage: Object.fromEntries(Object.keys(localStorage).filter((k) => k === "notationLab" || k === "notationLabLearning" || k.startsWith("notationPractice-")).map((k) => [k, localStorage.getItem(k)])) }, null, 2), "application/json");
  };
  $("loadProgress").onchange = (e) => __async(null, null, function* () {
    var _a;
    try {
      let data = JSON.parse(yield e.target.files[0].text());
      if ((_a = data.storage) == null ? void 0 : _a.notationLabLearning) validateLearning(JSON.parse(data.storage.notationLabLearning));
      if (data.version !== 2 || !data.storage || typeof data.storage.notationLab !== "string") throw Error("Invalid backup");
      let saved = JSON.parse(data.storage.notationLab);
      if (!Array.isArray(saved.composition) || saved.composition.some((x) => !x || ![0.125, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6].includes(x.beats) || x.rest !== true && !compositionMidis(x).length)) throw Error("Invalid notes");
      download("notation-lab-before-restore.json", JSON.stringify({ version: 2, storage: Object.fromEntries(Object.keys(localStorage).filter((k) => k === "notationLab" || k === "notationLabLearning" || k.startsWith("notationPractice-")).map((k) => [k, localStorage.getItem(k)])) }), "application/json");
      for (let [k, v] of Object.entries(data.storage)) if ((k === "notationLab" || k === "notationLabLearning" || /^notationPractice-/.test(k)) && typeof v === "string") localStorage.setItem(k, v);
      location.reload();
    } catch (err) {
      $("integrationState").textContent = "Restore failed: " + err.message;
    }
  });
  $("aionProgress").hidden = true;
}
function download(name, data, type) {
  let u = URL.createObjectURL(new Blob([data], { type })), a = document.createElement("a");
  a.href = u;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 2e3);
}
function changeMetre() {
  try {
    parseMetres($("metres").value);
    $("meterError").textContent = "";
    if (rhythmTimer) startRhythm();
    renderRhythm();
    renderComposition();
    store();
  } catch (e) {
    $("meterError").textContent = e.message;
  }
}
function keyboard() {
  let el = $("keyboard");
  el.innerHTML = "";
  keyboardNotesByMidi.clear();
  let previousRange = sightRangeKey, start = octave * 12 + 12, end = Math.min(127, start + 16), white = [];
  for (let n = start; n <= end; n++) if (![1, 3, 6, 8, 10].includes(pitchClass(n))) white.push(n);
  let labels = ["A", "W", "S", "E", "D", "F", "T", "G", "Y", "H", "U", "J", "K", "O", "L", "P", ";"];
  for (let n = start; n <= end; n++) {
    let black = [1, 3, 6, 8, 10].includes(pitchClass(n)), b = document.createElement("button");
    b.className = black ? "black" : "white";
    b.dataset.note = n;
    b.innerHTML = "<span>" + labels[n - start] + "\n" + midiName(n) + "</span>";
    b.setAttribute("aria-label", midiName(n) + ", computer key " + labels[n - start]);
    if (black) b.style.left = white.filter((w) => w < n).length / white.length * 100 + "%";
    bindNotePress(b, n);
    el.append(b);
    keyboardNotesByMidi.set(n, b);
  }
  el.previousElementSibling.firstElementChild.lastElementChild.textContent = " " + midiName(start) + "\u2013" + midiName(end) + " \xB7 scientific pitch (middle C = C4)";
  sightRangeKey = start + ":" + end;
  if (currentTab === "sight" && previousRange && previousRange !== sightRangeKey && sightPos < sightSeq.length) {
    for (let i = sightPos; i < sightSeq.length; i++) sightSeq[i] = randomSightNote($("sightClef").value, $("sightLevel") && +$("sightLevel").value === 2 ? "hard" : "easy");
    $("sightFeedback").textContent = "Keyboard range changed. Remaining notes now fit the visible keys.";
    renderSight();
  }
}
function splitBars(notes, sequence) {
  let bars = [], bar = [], used = 0, bi = 0;
  for (let [index, item] of notes.entries()) {
    let note = typeof item === "number" ? { midi: item, beats: 1 } : item, left = note.beats;
    while (left > 1e-6) {
      let m = sequence[bi % sequence.length], take = Math.min(left, m.beats - used);
      bar.push(__spreadProps(__spreadValues({}, note), { beats: take, index, tiedFrom: left < note.beats, tiedTo: left > take }));
      left -= take;
      used += take;
      if (used >= m.beats - 1e-6) {
        bars.push({ notes: bar, meter: m });
        bar = [];
        used = 0;
        bi++;
      }
    }
  }
  if (bar.length || !bars.length) bars.push({ notes: bar, meter: sequence[bi % sequence.length] });
  return bars;
}
function staffSvg(notes, clef = "treble", highlight = -1, opts = {}) {
  let id = "pending-" + Math.random().toString(36).slice(2);
  queueMicrotask(() => {
    let node = document.getElementById(id);
    if (node) {
      let el = node.parentElement;
      engrave(el, notes, clef, highlight);
      if (opts.labels) {
        let label = document.createElement("p");
        label.style.color = "#263a60";
        label.textContent = notes.map((n) => midiName(typeof n === "number" ? n : n.midi)).join(" \xB7 ");
        el.append(label);
      }
    }
  });
  return '<div id="' + id + '"></div>';
}
function engrave(el, notes, clef = "treble", highlight = -1, sequence = [{ n: 4, d: 4, beats: 4, label: "4/4" }]) {
  var _a, _b;
  el.innerHTML = "";
  let V = Vex.Flow, bars = splitBars(notes, sequence);
  for (let [bi, bar] of bars.entries()) {
    let holder = document.createElement("div");
    holder.style.display = "inline-block";
    el.append(holder);
    let fragments = [];
    for (let note of bar.notes) {
      let remain = note.beats;
      for (let [beats, duration] of [[4, "w"], [3, "h"], [2, "h"], [1.5, "q"], [1, "q"], [0.75, "8"], [0.5, "8"], [0.25, "16"], [0.125, "32"], [0.0625, "64"], [0.03125, "128"]]) while (remain >= beats - 1e-6 && remain > 0) {
        fragments.push(__spreadProps(__spreadValues({}, note), { beats, duration, dot: [3, 1.5, 0.75].includes(beats) }));
        remain -= beats;
      }
    }
    let diat = (n) => (Math.floor(n / 12) - 1) * 7 + natural.indexOf(noteLetter(n)), bottom = clef === "bass" ? diat(43) : diat(64), ys = fragments.map((x) => 100 - (diat(x.midi) - bottom) * 5), top = Math.max(20, 20 - Math.min(60, ...ys)), height = Math.max(170, Math.max(100, ...ys) + top + 45), width = Math.max(290, fragments.length * 64 + 160);
    let renderer = new V.Renderer(holder, V.Renderer.Backends.SVG);
    renderer.resize(width, height);
    let ctx = renderer.getContext(), stave = new V.Stave(10, top, width - 20);
    stave.addClef(clef).addTimeSignature(bar.meter.label).setContext(ctx).draw();
    let vfnotes = fragments.map((f) => {
      let name = names[pitchClass(f.midi)].replace("\u266F", "#").toLowerCase(), n = new V.StaveNote({ clef, keys: [name + "/" + (Math.floor(f.midi / 12) - 1)], duration: f.duration, auto_stem: true });
      if (name.includes("#")) n.addModifier(new V.Accidental("#"), 0);
      else if (fragments.slice(0, fragments.indexOf(f)).some((p) => pitchClass(p.midi) === pitchClass(f.midi) + 1)) n.addModifier(new V.Accidental("n"), 0);
      if (f.dot) V.Dot.buildAndAttach([n], { all: true });
      let articulationCode = f.articulation === "accent" ? "a>" : f.articulation === "staccato" ? "a." : f.articulation === "tenuto" ? "a-" : "";
      if (articulationCode && V.Articulation) {
        let articulation = new V.Articulation(articulationCode);
        if (articulation.setPosition) articulation.setPosition(V.ModifierPosition ? V.ModifierPosition.ABOVE : 3);
        n.addModifier(articulation, 0);
      }
      if (f.index === highlight) n.setStyle({ fillStyle: "#6266db", strokeStyle: "#6266db" });
      return n;
    });
    if (vfnotes.length) {
      let voice = new V.Voice({ num_beats: bar.meter.n, beat_value: bar.meter.d }).setStrict(false).addTickables(vfnotes);
      new V.Formatter().joinVoices([voice]).format([voice], width - 145);
      voice.draw(ctx, stave);
      if ((_a = bar.notes[0]) == null ? void 0 : _a.tiedFrom) new V.StaveTie({ last_note: vfnotes[0], last_indices: [0] }).setContext(ctx).draw();
      if ((_b = bar.notes[bar.notes.length - 1]) == null ? void 0 : _b.tiedTo) new V.StaveTie({ first_note: vfnotes[vfnotes.length - 1], first_indices: [0] }).setContext(ctx).draw();
      let beams = V.Beam.generateBeams(vfnotes, {
        groups: bar.meter.groups ? bar.meter.groups.map((g) => new V.Fraction(g, bar.meter.d)) : [new V.Fraction(1, 4)],
        flat_beams: true
      });
      beams.forEach((b) => b.setContext(ctx).draw());
      for (let i = 1; i < fragments.length; i++) if (fragments[i].index === fragments[i - 1].index) new V.StaveTie({ first_note: vfnotes[i - 1], last_note: vfnotes[i], first_indices: [0], last_indices: [0] }).setContext(ctx).draw();
      vfnotes.forEach((n, i) => {
        let elem = n.getSVGElement();
        if (elem && el.id === "composeScore") {
          elem.style.cursor = "pointer";
          elem.onclick = () => selectNote(fragments[i].index);
        }
      });
    }
    holder.setAttribute("aria-label", "Bar " + (bi + 1) + " " + bar.meter.label);
  }
}
function selectNote(i) {
  selectedNote = i;
  let selected = composition[i];
  $("editPitch").value = selected && !selected.rest ? compositionMidis(selected)[0] : "";
  $("editPitch").disabled = !selected || !!selected.rest;
  $("duration").value = composition[i].beats;
  renderComposition();
  let chip = $("composeNotes").children[i];
  if (chip) chip.scrollIntoView({ block: "nearest", inline: "nearest" });
}
function renderComposition() {
  let sequence = metres(), renderKey = [currentComposerClef(composition), selectedNote, sequence.map((m) => m.label).join(","), composition.map((x) => [x.rest ? "rest" : compositionMidis(x).join("."), x.beats, x.velocity || 0, x.articulation || ""].join(":")).join(";")].join("|");
  updateComposerTips();
  if (renderKey === compositionRenderKey) return;
  compositionRenderKey = renderKey;
  composerPreviewKey = "";
  engrave($("composeScore"), composition, currentComposerClef(composition), selectedNote, sequence);
  $("composeCount").textContent = composition.filter((x) => !x.rest).length;
  let chips = document.createDocumentFragment();
  composition.forEach((x, i) => {
    let b = document.createElement("button");
    b.className = "chip" + (i === selectedNote ? " selected" : "");
    b.textContent = i + 1 + ": " + (x.rest ? "Rest" : compositionMidis(x).map(midiName).join(" + ")) + " \xB7 " + x.beats + (x.articulation ? " \xB7 " + x.articulation : "");
    b.onclick = () => selectNote(i);
    chips.append(b);
  });
  let noteList = $("composeNotes");
  noteList.innerHTML = "";
  noteList.append(chips);
}
function renderCompositionPreview() {
  if (currentTab !== "compose" || typeof engrave !== "function") return;
  let preview = [];
  composerActive.forEach((entry) => preview.push({ midi: entry.midi, beats: 0.25, role: "preview" }));
  let key = preview.map((item) => item.midi).join(",") + "|" + compositionRenderKey;
  if (key === composerPreviewKey) return;
  composerPreviewKey = key;
  let score = $("composeScore");
  if (!score) return;
  let sequence = metres();
  engrave(score, composition.concat(preview), currentComposerClef(composition.concat(preview)), selectedNote, sequence);
}
const oldNewRead = newRead, oldRenderSight = renderSight, oldCheckEar = checkEar;
newRead = function() {
  oldNewRead();
  engrave($("readScore"), [readTarget], readClef, 0);
};
renderSight = function() {
  oldRenderSight();
  engrave($("sightScore"), sightSeq, $("sightClef").value, sightPos);
};
checkEar = function(n) {
  oldCheckEar(n);
  if (earLocked) engrave($("earScore"), earSeq);
};
function rhythmNotes(m = metres()[meterIndex % metres().length]) {
  let unit = 4 / m.d, p = $("rhythmPattern").value, out = [], used = 0;
  while (used < m.beats - 1e-6) {
    let d = p === "eighths" ? unit / 2 : p === "mixed" ? out.length % 3 === 0 ? unit : unit / 2 : unit;
    d = Math.min(d, m.beats - used);
    out.push({ midi: 67, beats: d });
    used += d;
  }
  return out;
}
function renderRhythm() {
  let seq = metres();
  let renderKey = [$("rhythmPattern").value, seq.map((m2) => m2.label).join(",")].join("|");
  if (renderKey !== rhythmRenderKey) {
    rhythmRenderKey = renderKey;
    engrave($("rhythmScore"), seq.flatMap((m2) => rhythmNotes(m2)), "treble", -1, seq);
  }
  let m = seq[meterIndex % seq.length];
  let lights = $("beatLights");
  if (beatNodes.length !== m.n) {
    let nextBeats = document.createDocumentFragment();
    for (let i = 0; i < m.n; i++) {
      let beat = document.createElement("div");
      beat.className = "beat";
      beat.textContent = i + 1;
      nextBeats.append(beat);
    }
    lights.innerHTML = "";
    lights.append(nextBeats);
    beatNodes = Array.from(lights.children);
  } else {
    beatNodes.forEach((beat, i) => {
      beat.textContent = i + 1;
      beat.classList.remove("on");
    });
  }
}
function rhythmBeat() {
  let now = performance.now();
  if (now < nextPulse) return;
  let seq = metres(), m = seq[meterIndex % seq.length], unit = 6e4 / (+$("bpm").value || 80) * 4 / m.d;
  let starts = [0], sum = 0;
  for (let g of m.groups) {
    sum += g;
    starts.push(sum);
  }
  clickSound(starts.includes(pulse));
  for (let i = 0; i < beatNodes.length; i++) beatNodes[i].classList.toggle("on", i === pulse);
  nextPulse += unit;
  pulse++;
  if (pulse >= m.n) {
    pulse = 0;
    meterIndex++;
    renderRhythm();
  }
  if (now - nextPulse > unit) nextPulse = now + unit;
}
function startRhythm() {
  if (rhythmTimer) {
    clearInterval(rhythmTimer);
    rhythmTimer = null;
    rhythmMetronomeOn = false;
    $("startRhythm").textContent = "Start metronome";
    return;
  }
  try {
    parseMetres($("metres").value);
  } catch (e) {
    $("meterError").textContent = e.message;
    return;
  }
  $("bpm").value = Math.max(40, Math.min(180, +$("bpm").value || 80));
  getAudio();
  if (!rhythmActive || !expectedTaps.length) {
    meterIndex = 0;
    pulse = 0;
    rhythmStart = performance.now();
    nextPulse = rhythmStart;
    expectedTaps = [];
    let offset = 0;
    for (let m of metres()) {
      for (let n of rhythmNotes(m)) {
        expectedTaps.push(offset);
        offset += n.beats;
      }
    }
  }
  rhythmActive = true;
  rhythmMetronomeOn = true;
  renderRhythm();
  rhythmBeat();
  rhythmTimer = setInterval(rhythmBeat, 8);
  $("startRhythm").textContent = "Stop metronome";
}
function tapBeat() {
  if (!rhythmTimer) return;
  let quarter = 6e4 / +$("bpm").value, cycle = metres().reduce((s, m) => s + m.beats, 0) * quarter, t = (performance.now() - rhythmStart) % cycle, dev = Math.min(...expectedTaps.map((x) => {
    let d = Math.abs(t - x * quarter);
    return Math.min(d, cycle - d);
  }));
  rhythmTaps.push(dev);
  $("timingError").textContent = Math.round(rhythmTaps.reduce((s, x) => s + x, 0) / rhythmTaps.length) + " ms";
  $("rhythmFeedback").textContent = Math.round(dev) + " ms from written onset \xB7 " + rhythmTaps.length + " taps";
  store();
}
function exportMidi() {
  if (!composition.length) return;
  let events = [], tick = 0;
  for (let n of composition) {
    let midis = compositionMidis(n), velocity = Math.max(1, Math.min(127, n.velocity || 90));
    midis.forEach((midi) => events.push({ tick, bytes: [144, midi, velocity], order: 2 }));
    tick += Math.round(n.beats * 960);
    midis.forEach((midi) => events.push({ tick, bytes: [128, midi, 0], order: 0 }));
  }
  let seq = metres(), barTick = 0, i = 0;
  while (barTick < tick) {
    let m = seq[i++ % seq.length];
    events.push({ tick: barTick, bytes: [255, 88, 4, m.n, Math.log2(m.d), 24, 8], order: 1 });
    let label = Array.from(m.label, (c) => c.charCodeAt(0));
    events.push({ tick: barTick, bytes: [255, 1, ...vlq(label.length), ...label], order: 1 });
    barTick += Math.round(m.beats * 960);
  }
  events.sort((a, b) => a.tick - b.tick || a.order - b.order);
  let data = [0, 255, 81, 3, 9, 39, 192], last = 0;
  for (let event of events) {
    data.push(...vlq(event.tick - last), ...event.bytes);
    last = event.tick;
  }
  data.push(0, 255, 47, 0);
  let len = data.length, bytes = [77, 84, 104, 100, 0, 0, 0, 6, 0, 0, 0, 1, 3, 192, 77, 84, 114, 107, len >>> 24 & 255, len >>> 16 & 255, len >>> 8 & 255, len & 255, ...data];
  download("notation-lab-composition.mid", new Uint8Array(bytes), "audio/midi");
}
const learningTasks = ["read", "sight", "rhythm", "compose", "ear"];
const taskLabels = { read: "Note recognition", sight: "Sight-reading", rhythm: "Rhythm", compose: "Composition", ear: "Ear training" };
const dailyTargets = { read: 300, sight: 600, rhythm: 300, compose: 300, ear: 300 };
let learning = { version: 3, tasks: {}, days: {}, revision: 0 }, lastActivity = {}, lastClock = performance.now(), writingExercise = null, syncTimer = null, syncBusy = false, syncedRevision = -1, lastRhythmTarget = "", learningReady = false, learningDirty = false, lastLearningWrite = 0, lastLearningUi = 0;
function dayKey() {
  let d = /* @__PURE__ */ new Date();
  return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, "0"), String(d.getDate()).padStart(2, "0")].join("-");
}
function blankEvidence() {
  return { attempts: 0, success: 0, tiers: [{ attempts: 0, success: 0 }, { attempts: 0, success: 0 }, { attempts: 0, success: 0 }], recent: [] };
}
function taskEvidence(task) {
  return learning.tasks[task] || (learning.tasks[task] = blankEvidence());
}
function dailyComplete(task, day) {
  let d = day[task];
  return d.seconds >= dailyTargets[task] && d.inputs >= 5 && d.success >= 1;
}
function todayEvidence() {
  return learning.days[dayKey()] || (learning.days[dayKey()] = Object.fromEntries(learningTasks.map((t) => [t, { seconds: 0, inputs: 0, success: 0 }])));
}
function masteryFor(e) {
  if (!e || !e.attempts) return 0;
  let weights = [35, 35, 30], total = 0;
  e.tiers.forEach((tier, i) => {
    if (!tier.attempts) return;
    let recent = e.recent.filter((x) => x.tier === i).slice(-40), correct = recent.reduce((s, x) => s + x.ok, 0);
    let rate = recent.length ? correct / recent.length : tier.success / tier.attempts;
    let exposure = Math.min(1, tier.attempts / 40);
    total += weights[i] * rate * exposure;
  });
  return Math.max(0, Math.min(100, Math.round(total)));
}
function saveLearning() {
  learning.revision++;
  try {
    localStorage.setItem("notationLabLearning", JSON.stringify(learning));
  } catch (e) {
    $("learningStatus").textContent = "Progress storage unavailable. Export a backup before closing.";
  }
  learningDirty = false;
  lastLearningWrite = performance.now();
  updateLearningUI();
  queueProgressSync();
}
function recordEvidence(task, ok, tier = 0, fromInput = true) {
  if (!learningTasks.includes(task)) return;
  let e = taskEvidence(task);
  e.attempts++;
  e.success += +ok;
  e.tiers[tier].attempts++;
  e.tiers[tier].success += +ok;
  e.recent.push({ ok: +ok, tier });
  e.recent = e.recent.slice(-240);
  if (fromInput) recordActivity(task, ok);
  saveLearning();
}
function recordActivity(task, success = false) {
  if (!learningTasks.includes(task)) return;
  let now = performance.now();
  lastActivity[task] = now;
  let d = todayEvidence()[task];
  d.inputs++;
  d.success += +success;
}
function practiceTick() {
  var _a;
  let now = performance.now(), elapsed = Math.min(2, Math.max(0, (now - lastClock) / 1e3));
  lastClock = now;
  if (document.visibilityState !== "visible" || document.hasFocus && !document.hasFocus() || !learningTasks.includes(currentTab)) return;
  if (now - ((_a = lastActivity[currentTab]) != null ? _a : -Infinity) > 15e3) return;
  todayEvidence()[currentTab].seconds += elapsed;
  learningDirty = true;
  if (now - lastLearningUi >= 5e3) updateLearningUI();
  if (now - lastLearningWrite >= 15e3) saveLearning();
}
function flushPracticeProgress() {
  if (learningDirty) saveLearning();
}
function validateLearning(value) {
  if (!value || value.version !== 3 || !value.tasks || !value.days) throw Error("Invalid learning backup");
  for (let t of learningTasks) {
    let e = value.tasks[t];
    if (!e) continue;
    if (!Number.isInteger(e.attempts) || e.attempts < 0 || !Number.isInteger(e.success) || e.success < 0 || e.success > e.attempts || !Array.isArray(e.tiers) || e.tiers.length !== 3 || !Array.isArray(e.recent) || e.recent.length > 240) throw Error("Invalid learning evidence");
    for (let p of e.tiers) if (!Number.isInteger(p.attempts) || p.attempts < 0 || !Number.isInteger(p.success) || p.success < 0 || p.success > p.attempts) throw Error("Invalid tier evidence");
    for (let r of e.recent) if (![0, 1].includes(r.ok) || ![0, 1, 2].includes(r.tier)) throw Error("Invalid recent evidence");
  }
  for (let [date, day] of Object.entries(value.days)) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw Error("Invalid practice date");
    for (let t of learningTasks) {
      let d = day[t];
      if (!d || !Number.isFinite(d.seconds) || d.seconds < 0 || d.seconds > 86400 || !Number.isInteger(d.inputs) || d.inputs < 0 || !Number.isInteger(d.success) || d.success < 0 || d.success > d.inputs) throw Error("Invalid daily evidence");
    }
  }
  return value;
}
function installLearning() {
  try {
    let saved = JSON.parse(localStorage.getItem("notationLabLearning") || "null");
    if (saved) learning = validateLearning(saved);
    else {
      for (let [t, stats] of [["read", readStats], ["ear", earStats]]) {
        let a = Math.max(0, Number(stats.attempts) || 0), c = Math.min(a, Math.max(0, Number(stats.correct) || 0));
        let e = taskEvidence(t);
        e.attempts = a;
        e.success = c;
        e.tiers[0] = { attempts: a, success: c };
      }
      learning.legacyCompleted = {};
      for (let k of Object.keys(localStorage)) {
        if (k.startsWith("notationPractice-")) {
          try {
            let prior = JSON.parse(localStorage.getItem(k));
            if (Array.isArray(prior)) learning.legacyCompleted[k.slice(17)] = prior.filter((i) => Number.isInteger(i) && i >= 0 && i < 5);
          } catch (e) {
          }
        }
      }
      localStorage.setItem("notationLabLearning", JSON.stringify(learning));
    }
  } catch (e) {
    $("learningStatus").textContent = "Saved learning evidence needs repair; existing app progress is preserved.";
  }
  for (let t of learningTasks) {
    let panel = $(t).querySelector(".panel"), bar = document.createElement("div");
    bar.className = "mastery";
    bar.innerHTML = '<div class="mastery-value" id="mastery-' + t + '">0%</div><div class="mastery-track" role="progressbar" aria-label="' + taskLabels[t] + ' mastery" aria-valuemin="0" aria-valuemax="100"><div class="mastery-fill"></div><i style="left:35%"></i><i style="left:70%"></i></div><div class="mastery-labels"><span>Beginner</span><span>Intermediate</span><span>Master</span></div>';
    panel.querySelector("h2").after(bar);
  }
  $("accuracyText").parentElement.querySelectorAll(".metrics,.progress").forEach((e) => e.hidden = true);
  $("accuracyText").hidden = true;
  $("resetRead").textContent = "Reset session counters";
  $("accuracyText").previousElementSibling.previousElementSibling.hidden = true;
  for (let t of ["sight", "ear"]) {
    let controls = $(t).querySelector(".controls");
    let label = document.createElement("label");
    label.innerHTML = 'Challenge <select id="' + t + 'Level"><option value="0">Foundation</option><option value="1">Intermediate</option><option value="2">Advanced \xB7 exact pitch</option></select>';
    controls.prepend(label);
    $(t + "Level").onchange = () => t === "sight" ? newSight() : newEar();
  }
  let composeControls = document.createElement("div");
  composeControls.className = "controls";
  composeControls.innerHTML = '<label>Writing exercise <select id="writingLevel"><option value="0">Foundation \xB7 natural notes</option><option value="1">Intermediate \xB7 dotted rhythms</option><option value="2">Advanced \xB7 chromatic</option></select></label><button id="writingStart">New writing exercise</button><span id="writingFeedback" role="status">Compose freely, or complete a writing exercise to build mastery.</span><span id="composeFeedback" role="status">Play a note to write it from your performance.</span><div class="score writing-score" id="writingScore" hidden></div>';
  $("composeScore").before(composeControls);
  $("writingStart").onclick = startWritingExercise;
  $("aionProgress").hidden = true;
  $("integrationState").textContent = "Progress is saved privately in this browser. Export a backup to move it to another device.";
  if (!learning.legacyCompleted) {
    learning.legacyCompleted = {};
    for (let k of Object.keys(localStorage)) if (k.startsWith("notationPractice-")) {
      try {
        let prior = JSON.parse(localStorage.getItem(k));
        if (Array.isArray(prior)) learning.legacyCompleted[k.slice("notationPractice-".length)] = prior.filter((i) => Number.isInteger(i) && i >= 0 && i < 5);
      } catch (e) {
      }
    }
    localStorage.setItem("notationLabLearning", JSON.stringify(learning));
  }
  learningReady = true;
  updateLearningUI();
  setInterval(practiceTick, 1e3);
  setInterval(assessRhythmWindows, 30);
  syncProgress(false);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      flushPracticeProgress();
      if (rhythmTimer) startRhythm();
      queueProgressSync(true);
    }
    lastClock = performance.now();
  });
  window.addEventListener("pagehide", flushPracticeProgress);
}
function updateLearningUI() {
  if (!learningReady) return;
  lastLearningUi = performance.now();
  for (let t of learningTasks) {
    let value = masteryFor(taskEvidence(t)), box = $("mastery-" + t);
    box.textContent = value + "%";
    let track = box.nextElementSibling;
    track.setAttribute("aria-valuenow", value);
    track.firstElementChild.style.width = value + "%";
  }
  let daily = todayEvidence();
  document.querySelectorAll("#dailyChecklist input").forEach((box, i) => {
    var _a, _b;
    let t = ["read", "rhythm", "sight", "compose", "ear"][i], d = daily[t];
    box.checked = dailyComplete(t, daily) || Boolean((_b = (_a = learning.legacyCompleted) == null ? void 0 : _a[dayKey()]) == null ? void 0 : _b.includes(i));
  });
  let done = Array.from(document.querySelectorAll("#dailyChecklist input")).filter((x) => x.checked).length;
  $("dailyBar").style.width = done / 5 * 100 + "%";
}
function buildCourse() {
  const curriculum = [
    ["The musical alphabet", [
      ["Map pitch to the staff", "Read from the bottom line upward. Treble lines are E\u2013G\u2013B\u2013D\u2013F; bass lines are G\u2013B\u2013D\u2013F\u2013A. Spaces continue the same seven-letter sequence. Middle C is the shared landmark between the clefs. Identify the clef before naming any note."],
      ["Practise natural notes", "In Note Trainer select Treble and Staff notes. Name each note before playing it. Work in short groups without revealing the answer. Repeat in Bass. Move between line and space notes rather than memorising only an acronym."],
      ["Read by interval", "In Sight-Reading use Foundation. A neighbouring line-to-space movement is a step; line-to-next-line is a skip. Read the direction and distance before looking for an individual key."],
      ["Write and review", "Start a Foundation writing exercise. Match the shown pitches and durations using the keyboard and note-length selector. Read your finished phrase aloud, then compare playback with the notation."],
      ["Checkpoint", "Complete several accurate foundation sessions on different days. The Beginner part of each task bar grows from correct attempts with enough repetition; opening a lesson does not award mastery."]
    ]],
    ["Rhythm and timing", [
      ["Understand note values", "A semibreve lasts four crotchets, a minim two, a crotchet one, a quaver one half and a semiquaver one quarter. A dot adds half the original duration. Count values relative to the written metre rather than treating every denominator as a crotchet."],
      ["Count simple metre", "Set Rhythm Lab to 2/4, 3/4 and 4/4 in turn. Begin at 60\u201380 crotchets per minute. Count denominator units aloud, then add \u201Cand\u201D subdivisions. Tap the displayed rhythm, including every written onset."],
      ["Distinguish beat from subdivision", "Switch between the quarter, eighth and mixed patterns. Keep the underlying pulse steady while placing extra onsets between it. In 2/2, a minim is the notated beat, while this app still sets tempo in crotchets per minute."],
      ["Write durations", "Use the Composer duration selector to enter a bar with minims, crotchets and quavers. Add the values yourself and check the barline. Select and edit any incorrect value."],
      ["Checkpoint", "Finish the daily rhythm requirement through active tapping. Practise multiple simple metres with consistent timing before raising tempo."]
    ]],
    ["Keys and accidentals", [
      ["Learn accidental rules", "A sharp raises a pitch by one semitone, a flat lowers it by one, and a natural cancels an accidental. In conventional notation an accidental applies to its staff position through the bar. A key signature establishes recurring alterations."],
      ["Build major scales", "Use the interval pattern tone\u2013tone\u2013semitone\u2013tone\u2013tone\u2013tone\u2013semitone. Write C major, G major and F major on paper. Preserve one of each letter name in a scale; enharmonic spellings are not interchangeable for analysis."],
      ["Extend the range", "In Note Trainer select With ledger lines. Locate middle C first, then count successive staff positions. Keep the clef in view. Use Z and X to reach the required register."],
      ["Read chromatic notation", "Select Chromatic notes. Identify the letter and octave before applying the accidental. This app spells chromatic pitches with sharps; practise flat spellings separately on paper."],
      ["Checkpoint", "Alternate clefs and difficulty rather than practising a single familiar range. Intermediate mastery requires successful intermediate attempts."]
    ]],
    ["Intervals and chords", [
      ["Name intervals on the staff", "Count both the starting and ending letter names for interval number. Then count semitones to determine quality: major, minor, perfect, augmented or diminished. A third spans three letter names even when chromatic."],
      ["Hear intervals", "In Ear Training begin with single pitches and the reference C. Move to Intermediate two-note intervals. Sing the second note before playing it. Use Advanced to require the written register as well as pitch class."],
      ["Construct triads", "On paper build major, minor, diminished and augmented triads from stacked thirds. Spell the root, third and fifth correctly. Identify root position, first inversion and second inversion from the bass note."],
      ["Connect reading and sound", "Write a broken triad as a monophonic Composer phrase. Play it slowly and compare the heard contour with the staff. Simultaneous chord entry is outside this composer."],
      ["Checkpoint", "Use interval challenges without the reveal button. Revealed or assisted answers do not earn mastery evidence."]
    ]],
    ["Two-clef reading", [
      ["Use shared landmarks", "Find treble G, bass F and middle C. Read outward by steps and skips. Keep the same sounding pitch when translating a note from treble to bass notation."],
      ["Alternate clefs", "Set Note Trainer to Mixed and use ledger lines. Pause long enough to identify the clef, then reduce that pause over repeated sessions. Avoid guessing by the note\u2019s screen height alone."],
      ["Read longer phrases", "In Sight-Reading choose longer melodies. Use Intermediate for ledger-line reading and Advanced for chromatic pitches with exact octave matching. Scan the whole phrase before the first note."],
      ["Practise hands separately", "Play treble phrases with the right hand and bass phrases with the left. For true two-staff, two-hand reading, use an external grand-staff score; this app displays one clef at a time."],
      ["Checkpoint", "Finish unfamiliar melodies in both clefs. A restarted melody preserves previous errors in the background; it does not erase evidence."]
    ]],
    ["Writing real music", [
      ["Plan a phrase", "Choose a metre, a tonal centre and a four-bar contour. Decide where the phrase rests and resolves before entering pitches. Count the duration of every bar."],
      ["Apply engraving rules", "Group beams according to the beat structure. Distinguish a tie, which extends the same pitch, from a slur, which groups different pitches. Dots change duration; stems and flags show the underlying note value."],
      ["Complete writing exercises", "Move from Foundation to Intermediate dotted rhythms and Advanced chromatic phrases. Read the target notation and select the correct duration before each entry. Free composition counts as practice, but note quantity alone does not establish correctness."],
      ["Edit the full score", "Select any note in the score or numbered list. Change pitch and length, apply the edit, and inspect the resulting bar divisions. Review early bars as well as the most recent notes."],
      ["Checkpoint", "Export MIDI and inspect the phrase in Logic\u2019s Score Editor. The app does not assess musical taste, harmony or expressive phrasing; its writing mastery assesses the displayed copying exercises."]
    ]],
    ["Advanced rhythm", [
      ["Feel compound metre", "Set 6/8, 9/8 and 12/8. Count in groups of three quavers: 1-la-li, 2-la-li. Distinguish two dotted-crotchet beats in 6/8 from three crotchet beats in 3/4."],
      ["Control additive grouping", "Compare 2+3/8 with 3+2/8, then 2+2+3/8 with 3+2+2/8. Keep every eighth-note unit equal while moving the accents. Enter explicit groups rather than relying on the odd-metre default."],
      ["Read changing metres", "Enter 4/4, 7/8, 6/8. Count through each transition without pausing or adding an extra unit. The entered sequence repeats. Keep the app\u2019s crotchet-based tempo definition in mind."],
      ["Read smaller values", "Use 5/16 or 7/16 slowly. Separate beat grouping from note duration. Study syncopation and tuplets from an external score; arbitrary tuplet entry is not implemented in this app."],
      ["Checkpoint", "Advanced rhythm evidence requires accurate taps in changing/additive or fine-unit metre at a controlled tempo. Avoid increasing speed until the grouping remains stable."]
    ]],
    ["Musicianship", [
      ["Scan before performing", "Identify clef, metre, pitch range, repeated shapes, accidentals and difficult rhythmic positions before playing. Count one silent preparatory bar. Keep going after a recoverable mistake."],
      ["Transcribe a phrase", "Listen to a short phrase, sing it, tap its rhythm, then write it. Use an external recording or a musical partner so the answer is not already visible. Check pitch and duration separately."],
      ["Compose and revise", "Write a short original melody. Review notation, phrase shape, range and rhythmic clarity. Export to Logic for articulation, dynamics, slurs, harmony and a full score layout."],
      ["Maintain a balanced routine", "Complete the five daily tasks through actual input. Return to weak task bars instead of repeatedly practising only the strongest skill. Export a progress backup periodically."],
      ["Final checkpoint", "Master is the end of this app\u2019s measured exercise scale. Reaching it requires sustained success across all three difficulty tiers. It is not certification of professional sight-reading, ensemble skill or complete musicianship."]
    ]]
  ];
  $("weekList").innerHTML = curriculum.map((week, i) => '<details class="course-week"><summary>Week ' + (i + 1) + " \xB7 " + week[0] + "</summary>" + week[1].map(([title, body], j) => '<details class="course-step"><summary>' + (j + 1) + ". " + title + "</summary><p>" + body + "</p></details>").join("") + "</details>").join("");
  $("dailyChecklist").innerHTML = "";
  practice.forEach((p) => {
    let label = document.createElement("label"), box = document.createElement("input");
    box.type = "checkbox";
    box.disabled = true;
    label.append(box, document.createTextNode(p));
    $("dailyChecklist").append(label);
  });
  $("resetDaily").hidden = true;
}
function startWritingExercise() {
  let tier = +$("writingLevel").value, clef = currentComposerClef(), beats = tier === 0 ? [1, 1, 2, 1, 1, 2] : tier === 1 ? [1.5, 0.5, 1, 1, 2, 1, 1] : [0.75, 0.25, 1, 0.5, 0.5, 1, 2, 1, 1];
  writingExercise = { tier, pos: 0, notes: beats.map((b) => ({ midi: randomNote(clef, tier === 2 ? "hard" : tier === 1 ? "medium" : "easy"), beats: b })) };
  $("writingScore").hidden = false;
  engrave($("writingScore"), writingExercise.notes, clef, 0);
  $("writingFeedback").textContent = "Copy the highlighted note with its written duration.";
}
function writingAttempt(n, beats) {
  if (!writingExercise || writingExercise.pos >= writingExercise.notes.length) {
    recordActivity("compose", true);
    saveLearning();
    return;
  }
  let target = writingExercise.notes[writingExercise.pos], ok = n === target.midi && Math.abs(beats - target.beats) < 1e-5;
  recordEvidence("compose", ok, writingExercise.tier);
  if (ok) writingExercise.pos++;
  $("writingFeedback").textContent = ok ? writingExercise.pos === writingExercise.notes.length ? "Phrase complete." : "Correct. Continue with the highlighted note." : "Check both the pitch and written duration.";
  engrave($("writingScore"), writingExercise.notes, currentComposerClef(writingExercise.notes), writingExercise.pos);
}
const evidenceCheckRead = checkRead, evidenceCheckSight = checkSight, evidenceCheckEar = checkEar, evidenceAddComposition = addComposition, evidenceTapBeat = tapBeat;
checkRead = function(n) {
  if (!readLocked) {
    let assisted = hintEnabled;
    recordEvidence("read", !assisted && pitchClass(n) === pitchClass(readTarget), { easy: 0, medium: 1, hard: 2 }[$("difficulty").value]);
  }
  evidenceCheckRead(n);
};
checkSight = function(n) {
  var _a;
  if (sightPos >= sightSeq.length) return;
  let tier = +(((_a = $("sightLevel")) == null ? void 0 : _a.value) || 0), ok = tier === 2 ? n === sightSeq[sightPos] : pitchClass(n) === pitchClass(sightSeq[sightPos]);
  recordEvidence("sight", ok && !window.sightAssisted, tier);
  window.sightAssisted = false;
  if (tier === 2 && !ok && pitchClass(n) === pitchClass(sightSeq[sightPos])) {
    sightErrors++;
    $("sightFeedback").textContent = "Match the exact octave.";
    renderSight();
    store();
    return;
  }
  evidenceCheckSight(n);
};
checkEar = function(n) {
  var _a;
  if (earLocked) return;
  let tier = +(((_a = $("earLevel")) == null ? void 0 : _a.value) || 0), ok = tier === 2 ? n === earSeq[earPos] : pitchClass(n) === pitchClass(earSeq[earPos]);
  recordEvidence("ear", ok, tier);
  if (tier === 2 && !ok && pitchClass(n) === pitchClass(earSeq[earPos])) {
    earStats.attempts++;
    earStats.streak = 0;
    earPos = 0;
    updateEar();
    store();
    $("earFeedback").textContent = "Match the exact octave.";
    return;
  }
  evidenceCheckEar(n);
};
addComposition = function(n, beats, velocity, articulation) {
  let durationEl = $("duration"), chosenBeats = beats === void 0 ? durationEl ? +durationEl.value : 1 : beats;
  writingAttempt(Array.isArray(n) ? n[0] : n, chosenBeats);
  evidenceAddComposition(n, chosenBeats, velocity, articulation);
};
tapBeat = function() {
  if (!rhythmTimer) return;
  let q = 6e4 / +$("bpm").value, sequence = metres(), cycle = sequence.reduce((s, m) => s + m.beats, 0) * q, t = performance.now() - rhythmStart, round = Math.floor(t / cycle), local = t % cycle;
  let targets = expectedTaps.map((x, i) => ({ id: round + ":" + i, time: x * q }));
  targets.push({ id: round + 1 + ":0", time: cycle });
  let closest = targets.reduce((best, x) => Math.abs(local - x.time) < Math.abs(local - best.time) ? x : best, targets[0]);
  if (lastRhythmTarget === closest.id) return;
  lastRhythmTarget = closest.id;
  let dev = Math.abs(local - closest.time), tier = (sequence.length > 1 || sequence.some((m) => m.label.includes("+") || m.d >= 16)) && +$("bpm").value >= 90 ? 2 : sequence.some((m) => m.d >= 8 || ![2, 3, 4].includes(m.n)) ? 1 : 0;
  recordEvidence("rhythm", dev <= Math.min(120, q * 0.15), tier);
  evidenceTapBeat();
  $("rhythmFeedback").textContent = dev <= Math.min(120, q * 0.15) ? "On time." : "Listen to the pulse and adjust the next tap.";
};
const learningNewSight = newSight;
newSight = function() {
  var _a;
  learningNewSight();
  window.sightAssisted = false;
  let tier = +(((_a = $("sightLevel")) == null ? void 0 : _a.value) || 0);
  if (tier) {
    sightSeq = sightSeq.map(() => randomSightNote($("sightClef").value, tier === 2 ? "hard" : "medium"));
    renderSight();
  }
};
const learningNewEar = newEar;
newEar = function() {
  if ($("earLevel")) $("earMode").value = +$("earLevel").value === 0 ? "single" : "interval";
  learningNewEar();
};
function progressPayload() {
  return { schema: 1, revision: learning.revision, day: dayKey(), tasks: Object.fromEntries(learningTasks.map((t) => {
    let e = taskEvidence(t);
    return [t, { mastery: masteryFor(e), attempts: e.attempts, success: e.success, tiers: e.tiers, recent: e.recent }];
  })), daily: todayEvidence() };
}
function queueProgressSync() {
  return;
}
function syncProgress() {
  return __async(this, null, function* () {
    return;
  });
}
let rhythmAssessment = { armed: false, next: 0, hits: /* @__PURE__ */ new Set() }, lastStrayTap = -Infinity;
function rhythmTargetAt(index) {
  let q = 6e4 / +$("bpm").value, length = expectedTaps.length, cycle = metres().reduce((s, m) => s + m.beats, 0) * q;
  return Math.floor(index / length) * cycle + expectedTaps[index % length] * q;
}
function rhythmTier() {
  let seq = metres();
  return (seq.length > 1 || seq.some((m) => m.label.includes("+") || m.d >= 16)) && +$("bpm").value >= 90 ? 2 : seq.some((m) => m.d >= 8 || ![2, 3, 4].includes(m.n)) ? 1 : 0;
}
function assessRhythmWindows() {
  if (!rhythmActive || !rhythmAssessment.armed || !expectedTaps.length) return;
  let now = performance.now() - rhythmStart, tolerance = Math.min(120, 6e4 / +$("bpm").value * 0.15), count = 0;
  while (rhythmTargetAt(rhythmAssessment.next) + tolerance < now && count++ < 256) {
    let index = rhythmAssessment.next++;
    recordEvidence("rhythm", rhythmAssessment.hits.has(index), rhythmTier(), false);
    rhythmAssessment.hits.delete(index);
  }
}
const assessedStartRhythm = startRhythm;
startRhythm = function() {
  if (rhythmTimer) assessRhythmWindows();
  assessedStartRhythm();
  rhythmAssessment = { armed: false, next: 0, hits: /* @__PURE__ */ new Set() };
  lastStrayTap = -Infinity;
};
tapBeat = function() {
  if (!rhythmActive) {
    let bpm = Math.max(40, Math.min(180, +$("bpm").value || 80));
    try {
      parseMetres($("metres").value);
    } catch (e) {
      $("meterError").textContent = e.message;
      return;
    }
    $("bpm").value = bpm;
    meterIndex = 0;
    pulse = 0;
    rhythmStart = performance.now();
    nextPulse = rhythmStart;
    expectedTaps = [];
    let offset = 0;
    for (let m of metres()) for (let n of rhythmNotes(m)) {
      expectedTaps.push(offset);
      offset += n.beats;
    }
    rhythmActive = true;
    rhythmMetronomeOn = false;
    rhythmAssessment = { armed: false, next: 0, hits: /* @__PURE__ */ new Set() };
    lastStrayTap = -Infinity;
    lastRhythmTarget = "";
    renderRhythm();
    $("rhythmFeedback").textContent = "Timing started from your first tap. Keep the configured tempo.";
  }
  let q = 6e4 / +$("bpm").value, seq = metres(), cycle = seq.reduce((s, m) => s + m.beats, 0) * q, t = performance.now() - rhythmStart, round = Math.floor(t / cycle), length = expectedTaps.length, base = round * length, candidates = expectedTaps.map((x, i) => base + i);
  if (base > 0) candidates.push(base - 1);
  candidates.push(base + length);
  let index = candidates.reduce((best, x) => Math.abs(t - rhythmTargetAt(x)) < Math.abs(t - rhythmTargetAt(best)) ? x : best, candidates[0]), deviation = Math.abs(t - rhythmTargetAt(index)), tolerance = Math.min(120, q * 0.15);
  if (!rhythmAssessment.armed) {
    rhythmAssessment.armed = true;
    rhythmAssessment.next = index;
  }
  assessRhythmWindows();
  if (index < rhythmAssessment.next || rhythmAssessment.hits.has(index)) return;
  if (deviation <= tolerance) {
    rhythmAssessment.hits.add(index);
    recordActivity("rhythm", true);
    saveLearning();
  } else if (t - lastStrayTap > 120) {
    lastStrayTap = t;
    recordEvidence("rhythm", false, rhythmTier());
  }
  rhythmTaps.push(deviation);
  $("timingError").textContent = Math.round(rhythmTaps.reduce((s, x) => s + x, 0) / rhythmTaps.length) + " ms";
  emitCanonicalInput("TAP", { source: lastInputSource || "input", at: performance.now(), deviation, matched: deviation <= tolerance });
  store();
  $("rhythmFeedback").textContent = deviation <= tolerance ? "On time." : "Listen to the pulse and adjust the next tap.";
};
installInteractionStyles();
setupButtonFeedback();
ensureTrainingDisplays();
ensureAdSlots();
setupAdvanced();
restore();
keyboard();
buildCourse();
hintEnabled = !!$("showHint").checked;
updateRead();
updateEar();
newRead();
newSight();
renderRhythm();
renderComposition();
newEar();
document.querySelectorAll("#tabs button").forEach((x) => x.onclick = () => tab(x.dataset.tab));
$("connectMidi").onclick = connectMidi;
$("nextRead").onclick = newRead;
$("revealRead").onclick = () => {
  $("readFeedback").textContent = "Answer: " + midiName(readTarget);
  $("readScore").innerHTML = staffSvg([readTarget], readClef, 0, { labels: true });
  readLocked = true;
};
$("resetRead").onclick = () => {
  readStats = { correct: 0, attempts: 0, streak: 0 };
  updateRead();
  store();
  newRead();
};
["clef", "difficulty"].forEach((id) => $(id).addEventListener("change", newRead));
$("showHint").addEventListener("change", () => {
  hintEnabled = !!$("showHint").checked;
  renderRead();
});
$("newSight").onclick = newSight;
$("sightClef").onchange = newSight;
$("sightLength").onchange = newSight;
$("sightHint").onclick = () => {
  $("sightFeedback").textContent = sightPos < sightSeq.length ? (window.sightAssisted = true, "Next note: " + midiName(sightSeq[sightPos])) : "Complete!";
};
$("sightReplay").onclick = () => playSequence(sightSeq.map((n) => ({ midi: n, beats: 1 })));
$("sightReset").onclick = () => {
  sightPos = 0;
  liveNotesByTab.delete("sight");
  renderTrainingPlayed("sight", null);
  renderSight();
};
$("composeClef").onchange = renderComposition;
$("playCompose").onclick = () => playSequence(composition);
$("undoCompose").onclick = () => {
  composition.pop();
  renderComposition();
  store();
};
$("clearCompose").onclick = () => {
  if (composition.length) {
    composition = [];
    composerLastEndAt = 0;
    composerPreviewKey = "";
    liveNotesByTab.delete("compose");
    renderTrainingPlayed("compose", null);
    renderComposition();
    store();
    $("composeFeedback").textContent = "Composition cleared. New performance input will start a fresh phrase.";
  }
};
$("exportCompose").onclick = exportMidi;
$("newEar").onclick = newEar;
$("playEar").onclick = playEar;
$("earMode").onchange = newEar;
$("revealEar").onclick = () => {
  earLocked = true;
  $("earFeedback").textContent = "Answer: " + earSeq.map(midiName).join(" \u2192 ");
  $("earScore").innerHTML = staffSvg(earSeq, "treble", -1, { labels: true });
};
$("startRhythm").onclick = startRhythm;
$("tapRhythm").onclick = tapBeat;
$("resetRhythm").onclick = () => {
  if (rhythmTimer) {
    clearInterval(rhythmTimer);
    rhythmTimer = null;
  }
  rhythmActive = false;
  rhythmMetronomeOn = false;
  expectedTaps = [];
  rhythmAssessment = { armed: false, next: 0, hits: /* @__PURE__ */ new Set() };
  lastRhythmTarget = "";
  rhythmTaps = [];
  liveNotesByTab.delete("rhythm");
  renderTrainingPlayed("rhythm", null);
  store();
  $("timingError").textContent = "\u2014";
  $("startRhythm").textContent = "Start metronome";
  $("rhythmFeedback").textContent = "Taps reset. The metronome is optional; your first tap can start timing.";
};
$("rhythmPattern").onchange = () => {
  if (rhythmTimer) startRhythm();
  renderRhythm();
};
$("bpm").onchange = () => {
  if (rhythmTimer) startRhythm();
};
const keymap = { "a": 60, "w": 61, "s": 62, "e": 63, "d": 64, "f": 65, "t": 66, "g": 67, "y": 68, "h": 69, "u": 70, "j": 71, "k": 72, "o": 73, "l": 74, "p": 75, ";": 76 };
document.addEventListener("keydown", (e) => {
  if (e.repeat || e.metaKey || e.ctrlKey || e.altKey || ["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
  if (e.code === "Space" && currentTab === "rhythm") {
    e.preventDefault();
    tapBeat();
    return;
  }
  if (["z", "x"].includes(e.key.toLowerCase())) {
    e.preventDefault();
    octave = Math.max(0, Math.min(8, octave + (e.key.toLowerCase() === "z" ? -1 : 1)));
    keyboard();
    return;
  }
  let n = keymap[e.key.toLowerCase()];
  if (n !== void 0) n += (octave - 4) * 12;
  if (n !== void 0) {
    e.preventDefault();
    if (!computerHeld.has(e.key.toLowerCase())) {
      computerHeld.set(e.key.toLowerCase(), n);
      noteOn(n, 96, "computer");
    }
  }
});
document.addEventListener("keyup", (e) => {
  let key = e.key.toLowerCase(), n = computerHeld.get(key);
  if (n === void 0) return;
  computerHeld.delete(key);
  noteOff(n, "computer");
});
window.addEventListener("blur", () => {
  for (let [key, n] of computerHeld) noteOff(n, "computer");
  computerHeld.clear();
  activeNotes.clear();
});
installLearning();
if (navigator.requestMIDIAccess) {
  $("midiStatus").textContent = "Detecting MIDI keyboard\u2026";
  $("connectMidi").disabled = false;
  requestMidi(false);
  window.addEventListener("focus", () => {
    if (access) attachMidi();
    else requestMidi(false);
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.visibilityState || document.visibilityState === "visible") {
      if (access) attachMidi();
      else requestMidi(false);
    }
  });
  document.addEventListener("pointerdown", () => {
    if (!access) requestMidi(false);
  }, { passive: true });
} else {
  $("midiStatus").textContent = "No Web MIDI \xB7 virtual keys ready";
  $("connectMidi").textContent = "MIDI unavailable";
  $("connectMidi").disabled = true;
}
