const vm = require('vm');
const fs = require('fs');
const assert = require('assert');

const source = fs.readFileSync('dist/assets/ads.js', 'utf8');

function fixture(config, tc) {
  const scripts = [];
  const units = [{ dataset: {} }, { dataset: {} }];
  const boxes = units.map((unit) => ({ hidden: true, querySelector: () => unit }));
  const callbacks = [];
  const createScript = () => {
    const script = {};
    script.addEventListener = (event, callback) => {
      if (event === 'load') script._load = callback;
    };
    return script;
  };
  const context = {
    window: { NOTATION_ADS: config, setTimeout: () => 0 },
    document: {
      createElement: createScript,
      head: { append: (script) => scripts.push(script) },
      querySelector: () => null,
      querySelectorAll: () => boxes,
    },
  };
  if (tc) context.window.__tcfapi = (_, __, callback) => {
    callbacks.push(callback);
    callback(tc, true);
  };
  vm.runInNewContext(source, context);
  return { scripts, boxes, units, callbacks, context };
}

const good = { enabled: true, publisherId: 'ca-pub-1234567890123456', slotId: '123456', certifiedCmpConfigured: true };
assert.equal(fixture({ ...good, enabled: false }).scripts.length, 1);
assert.equal(fixture(good).scripts.length, 1);
assert.equal(fixture({ ...good, certifiedCmpConfigured: false }, { eventStatus: 'tcloaded', gdprApplies: false }).scripts.length, 1);
assert.equal(fixture(good, { eventStatus: 'tcloaded', gdprApplies: true, purpose: { consents: {} }, vendor: { consents: {} } }).scripts.length, 1);
const ready = fixture(good, { eventStatus: 'useractioncomplete', gdprApplies: true, purpose: { consents: { 1: true } }, vendor: { consents: { 755: true } } });
assert.equal(ready.scripts.length, 1);
assert.equal(ready.boxes[0].hidden, true);
ready.scripts[0]._load();
assert.equal(ready.boxes.every((box) => box.hidden === false), true);
assert.equal(ready.units.every((unit) => unit.dataset.adClient === good.publisherId && unit.dataset.adSlot === good.slotId), true);
assert.equal(ready.context.window.adsbygoogle.length, 2);
console.log('PASS: ads remain disabled without approved configuration, CMP and consent; reserved slots reveal only after the approved loader path');
