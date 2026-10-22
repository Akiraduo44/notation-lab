const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const app = fs.readFileSync(path.join(dist, 'assets', 'app.js'), 'utf8');
const engraving = fs.readFileSync(path.join(dist, 'assets', 'engraving.js'), 'utf8');
const index = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function must(text, expression, label) {
  assert.match(text, expression, `missing ${label}`);
}

must(app, /const inputSubscribers = \{ NOTE_ON: \[\], NOTE_OFF: \[\], TAP: \[\], SUSTAIN: \[\] \}/, 'canonical input channels');
must(app, /window\.NotationLabInput = \{ on: onCanonicalInput \}/, 'shared input API');
must(app, /function renderTrainingComparison\(tabName, payload\)/, 'same-staff training comparison');
must(app, /renderTrainingPlayed\(currentTab, payload\)/, 'live comparison render path');
must(app, /function visibleKeyboardRange\(\)/, 'visible keyboard range helper');
must(app, /function randomSightNote\(clef, level\)/, 'range-constrained sight note generator');
must(app, /sightRangeKey = start \+ ":" \+ end/, 'octave range tracking');
must(app, /Remaining notes now fit the visible keys/, 'range-change regeneration feedback');
must(app, /hintEnabled = false/, 'canonical hint state');
must(app, /hintEnabled = !!\$\("showHint"\)\.checked;\s*renderRead\(\);/, 'deterministic hint toggle');
const noteOff = app.slice(app.indexOf('function noteOff('), app.indexOf('function noteOn('));
must(noteOff, /renderLiveInput\(n, velocity, source, "released"/, 'release rendering for every input source');
const finalTap = app.slice(app.lastIndexOf('tapBeat = function()'));
assert.ok(!/if \(!rhythmTimer\) return/.test(finalTap), 'final tap path must work without a metronome timer');
must(finalTap, /if \(!rhythmActive\)/, 'tap-started rhythm session');
must(finalTap, /emitCanonicalInput\("TAP"/, 'canonical tap event');
must(app, /function assessRhythmWindows\(\)\s*\{\s*if \(!rhythmActive/, 'metronome-independent rhythm assessment');
must(app, /function quantizeComposerBeats\(milliseconds, source\)/, 'performance duration quantizer');
must(app, /let values = \[0\.125, 0\.25, 0\.5, 0\.75, 1, 1\.5, 2, 3, 4, 6\]/, 'conventional and dotted duration set');
must(app, /composerChordGroup = null/, 'chord capture state');
must(app, /function addCompositionRest\(beats\)/, 'inferred rest capture');
must(app, /function currentComposerClef\(items = composition\)/, 'automatic clef selection');
assert.ok(!/confirm\("Clear the composition\?"\)/.test(app), 'clear action must not use transient confirmation');
must(app, /id="writingScore" hidden/, 'empty writing score is hidden');
must(app, /function renderCompositionPreview\(\)/, 'live Composer preview');
must(app, /composeFeedback/, 'Composer transient feedback');
must(engraving, /flat_beams: true/, 'flat meter-aware Composer beams');
must(engraving, /new V\.GhostNote/, 'engraved rests');
must(engraving, /Array\.isArray\(fragment\.midis\)/, 'engraved chords');
must(engraving, /actual-good/, 'correct played-note styling');
must(engraving, /actual-bad/, 'incorrect played-note styling');
must(engraving, /window\.notationLabComparison/, 'comparison renderer export');
must(app, /function ensureAdSlots\(\)/, 'reserved ad placements');
must(index, /id="top-layout-reservation"/, 'top ad reservation');
must(index, /assets\/engraving\.js\?v=20261022-interaction-audit-2/, 'versioned engraving asset');
console.log('PASS: input lifecycle, same-staff feedback, constrained sight range, deterministic hints, metronome-independent taps, performance engraving, Composer beams and ad reservation');
