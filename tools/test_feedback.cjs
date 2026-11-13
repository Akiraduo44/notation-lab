const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const feedback = fs.readFileSync(path.join(root, 'dist', 'feedback', 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'dist', 'index.html'), 'utf8');
const form = fs.readFileSync(path.join(root, '.github', 'ISSUE_TEMPLATE', 'feedback.yml'), 'utf8');
const config = fs.readFileSync(path.join(root, '.github', 'ISSUE_TEMPLATE', 'config.yml'), 'utf8');

assert.match(feedback, /<meta name="robots" content="noindex,nofollow">/);
assert.match(feedback, /github\.com\/Akiraduo44\/notation-lab\/issues\/new\?template=feedback\.yml/);
assert.match(feedback, /GitHub sign-in is required/);
assert.doesNotMatch(feedback, /<form\b|mailto:/i);
assert.match(app, /href="\/feedback\/">Feedback<\/a>/);
assert.match(form, /type: dropdown/);
assert.match(form, /id: category/);
assert.match(form, /id: area/);
assert.match(form, /id: privacy/);
assert.match(form, /required: true/);
assert.match(config, /blank_issues_enabled: false/);

console.log('PASS: feedback route is structured, GitHub-gated and has no anonymous form or mail endpoint');
