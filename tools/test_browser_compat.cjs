const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const app = fs.readFileSync(path.join(dist, 'assets', 'app.js'), 'utf8');
const vex = fs.readFileSync(path.join(dist, 'assets', 'vexflow-4.2.5.js'), 'utf8');
const engraving = fs.readFileSync(path.join(dist, 'assets', 'engraving.js'), 'utf8');
const index = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function requireText(text, pattern, label) {
  if (!pattern.test(text)) throw new Error(`missing ${label}`);
}

for (const [name, text] of [['app', app], ['VexFlow', vex], ['engraving', engraving]]) {
  if (/\?\.|\?\?|\basync\s+function\b/.test(text)) throw new Error(`${name} still contains syntax below the ES2015 floor`);
}
requireText(app, /if\s*\(!w\.queueMicrotask\)/, 'queueMicrotask fallback');
requireText(app, /if\s*\(!Array\.prototype\.includes\)/, 'Array.includes fallback');
requireText(app, /if\s*\(!Object\.fromEntries\)/, 'Object.fromEntries fallback');
requireText(app, /if\s*\(!Object\.getOwnPropertyDescriptors\)/, 'object descriptor fallback');
requireText(app, /function bindNotePress\(/, 'touch and mouse keyboard handler');
requireText(app, /typeof window\.PointerEvent === "function"/, 'Pointer Events feature detection');
requireText(app, /window\.AudioContext \|\| window\.webkitAudioContext/, 'Web Audio vendor fallback');
requireText(app, /if\s*\(!a\s*\|\|\s*!a\.createOscillator\s*\|\|\s*!a\.createGain\)\s*return/, 'silent audio fallback');
requireText(app, /navigator\.requestMIDIAccess/, 'MIDI feature detection');
requireText(app, /function requestMidi\(manual\)/, 'automatic MIDI access request');
requireText(app, /function syncMeterPreset\(\)/, 'saved metre preset synchronization');
requireText(app, /Custom sequence/, 'custom metre selector state');
requireText(app, /access\.onstatechange = attachMidi/, 'MIDI hot-plug listener');
requireText(app, /function midiInputLabel\(input\)/, 'MIDI device naming');
requireText(app, /requestMidi\(false\);\s*window\.addEventListener\("focus"/, 'MIDI auto-connect and focus retry');
requireText(app, /typeof input\.addEventListener === "function".*midimessage/, 'MIDI event listener compatibility');
requireText(app, /function noteOff\(n, source = "input"\)/, 'note release lifecycle');
requireText(app, /function quantizeComposerBeats\(milliseconds, source\)/, 'automatic duration quantisation');
requireText(app, /function composerArticulation\(velocity, beats\)/, 'velocity articulation mapping');
requireText(app, /new V\.Articulation\(articulationCode\)/, 'engraved articulation marks');
requireText(app, /function ensureTrainingDisplays\(\)/, 'per-tab played-note displays');
if (app.includes('function ensureLiveNoteDisplay')) throw new Error('hero live-note display still present');
requireText(app, /function ensureAdSlots\(\)/, 'reserved ad slots');
requireText(app, /function renderTrainingPlayed\(tabName, payload\)/, 'played-note notation renderer');
requireText(app, /let keyboardNotesByMidi = .*new Map\(\)/, 'cached keyboard nodes');
requireText(app, /keyboardNotesByMidi\.get\(n\)/, 'cached keyboard flash lookup');
requireText(app, /beatNodes = \[\]/, 'cached rhythm beat nodes');
requireText(app, /rhythmRenderKey/, 'rhythm render cache');
requireText(app, /compositionRenderKey/, 'composition render cache');
requireText(app, /function flushPracticeProgress\(\)/, 'batched practice persistence');
requireText(app, /lastLearningWrite >= 15e3/, 'throttled learning writes');
if (app.includes('document.querySelectorAll("[data-note]")')) throw new Error('keyboard flash still scans the whole document');
if (app.includes('document.querySelectorAll(".beat")')) throw new Error('rhythm beat updates still scan the whole document');
requireText(app, /function setupButtonFeedback\(\)/, 'button feedback handler');
requireText(app, /navigator\.vibrate\(10\)/, 'mobile haptic feedback');
requireText(app, /button\.addEventListener\("click", function\(event\)/, 'accessible keyboard click fallback');
requireText(engraving, /drawMeterAwareBeams/, 'meter-aware Composer beam renderer');
requireText(engraving, /marginRight = "18px"/, 'separated Composer bar systems');
if (index.includes('notation-lab-music.halecrab10.chatgpt.site')) throw new Error('retired hostname remains in public metadata');
requireText(index, /href="https:\/\/notationlab\.pages\.dev\//, 'canonical public URL');
requireText(index, /<script src="\/assets\/vexflow-4\.2\.5\.js\?v=20261023-metres-sync-1" defer><\/script><script src="\/assets\/app\.js\?v=20261023-metres-sync-1" defer><\/script><script src="\/assets\/engraving\.js\?v=20261023-metres-sync-1" defer><\/script>/, 'versioned deferred app scripts');
requireText(index, /<script src="\/assets\/ads\.js\?v=20261023-metres-sync-1" defer><\/script>/, 'versioned advertising loader');
requireText(index, /id="top-layout-reservation"/, 'top ad reservation');
console.log('PASS: ES2015 syntax floor, runtime fallbacks, touch/mouse input, audio/MIDI detection, public metadata and cacheable assets');
