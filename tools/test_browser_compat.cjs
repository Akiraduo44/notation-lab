const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const app = fs.readFileSync(path.join(dist, 'assets', 'app.js'), 'utf8');
const ads = fs.readFileSync(path.join(dist, 'assets', 'ads.js'), 'utf8');
const vex = fs.readFileSync(path.join(dist, 'assets', 'vexflow-4.2.5.js'), 'utf8');
const engraving = fs.readFileSync(path.join(dist, 'assets', 'engraving.js'), 'utf8');
const index = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const qr = fs.readFileSync(path.join(dist, 'qr', 'index.html'), 'utf8');

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
requireText(app, /Web MIDI available \\xB7 no device connected/, 'explicit no-device MIDI status');
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
requireText(app, /function installResponsiveStyles\(\)/, 'responsive mobile layout styles');
requireText(app, /window\.NotationLabAdsRefresh\(\)/, 'visible-tab ad refresh');
requireText(app, /\.layout-reservation ins\.adsbygoogle[^`]+width: 100% !important/, 'contained responsive ad units');
requireText(app, /\.layout-reservation \{ border: 0; background: transparent/, 'mobile reservation chrome removal');
requireText(engraving, /drawMeterAwareBeams/, 'meter-aware Composer beam renderer');
requireText(engraving, /marginRight = "18px"/, 'separated Composer bar systems');
if (index.includes('notation-lab-music.halecrab10.chatgpt.site')) throw new Error('retired hostname remains in public metadata');
requireText(index, /href="https:\/\/notationlab\.pages\.dev\//, 'canonical public URL');
requireText(index, /<script src="\/assets\/vexflow-4\.2\.5\.js\?v=20261111-consent-qr-1" defer><\/script><script src="\/assets\/app\.js\?v=20261111-consent-qr-1" defer><\/script><script src="\/assets\/engraving\.js\?v=20261111-consent-qr-1" defer><\/script>/, 'versioned deferred app scripts');
requireText(index, /<script src="\/assets\/ads\.js\?v=20261111-consent-qr-1" defer><\/script>/, 'versioned advertising loader');
requireText(index, /ca-pub-8148335548762723/, 'AdSense publisher metadata');
requireText(ads, /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=/, 'AdSense site tag source');
requireText(ads, /function ensureAdSenseTag\(\)/, 'AdSense tag guard');
requireText(index, /id="top-layout-reservation"/, 'top ad reservation');
requireText(app, /requestedTab = String\(\(window\.location\.search\.match/, 'QR deep-link tab selection');
requireText(qr, /name="robots" content="noindex,nofollow"/, 'QR utility page indexing guard');
if ((qr.match(/utm_content=/g) || []).length !== 6) throw new Error('QR page does not contain six unique tracked destinations');
if (/\?tab=/.test(qr)) throw new Error('QR destinations must remain top-level rather than section-specific');
requireText(qr, /every code opens the same top-level Notation Lab page/, 'top-level QR destination copy');
for (const name of ['general-poster', 'handout', 'noticeboard', 'business-card', 'event-flyer', 'studio-board']) {
  if (!fs.existsSync(path.join(dist, 'assets', 'qr', `${name}.svg`))) throw new Error(`missing QR artwork: ${name}`);
}
console.log('PASS: ES2015 syntax floor, runtime fallbacks, touch/mouse input, audio/MIDI detection, public metadata and cacheable assets');
