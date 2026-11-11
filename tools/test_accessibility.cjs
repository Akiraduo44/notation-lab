const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'dist', 'assets', 'app.js'), 'utf8');
const engraving = fs.readFileSync(path.join(root, 'dist', 'assets', 'engraving.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'dist', 'assets', 'public.css'), 'utf8');
const accessibility = fs.readFileSync(path.join(root, 'dist', 'accessibility', 'index.html'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'dist', 'sitemap.xml'), 'utf8');

function must(text, expression, label) {
  assert.match(text, expression, `missing ${label}`);
}

must(app, /keySignatureOptions/, 'key-signature controls');
must(app, /scaffoldStage = "full"/, 'scaffold state');
must(app, /option value="melody"/, 'melodic dictation mode');
must(app, /Pitch error/, 'targeted pitch feedback');
must(app, /Octave error/, 'targeted octave feedback');
must(app, /rhythm-value error|Rhythm-value error/, 'targeted rhythm-value feedback');
must(app, /Beat-placement error/, 'targeted beat-placement feedback');
must(app, /coursePath/, 'defined course path');
must(app, /skillMap/, 'skill mastery map');
must(app, /exportTeacherReport/, 'teacher-verifiable report export');
must(app, /aria-controls/, 'tab accessibility relationships');
must(app, /heading\.focus/, 'focus management after tab changes');
must(engraving, /addKeySignature/, 'key-signature engraving');
must(engraving, /setAttribute\("role", "img"\)/, 'score image semantics');
must(css, /prefers-reduced-motion/, 'reduced-motion support');
must(css, /button:focus-visible/, 'visible keyboard focus');
must(accessibility, /Keyboard navigation/, 'keyboard documentation');
must(accessibility, /screen readers/i, 'screen-reader documentation');
must(accessibility, /colour/i, 'colour independence documentation');
must(accessibility, /Known limits/, 'accessibility limitations');
must(sitemap, /notationlab\.pages\.dev\/accessibility\//, 'accessibility route in sitemap');

console.log('PASS: course path, dictation, targeted feedback, key signatures, skill map, teacher report and accessibility documentation');
