const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidTitle } = require('./joosep.cjs');
test('accepts a normal title', () => {
assert.equal(isValidTitle('Learn Next.js'), true);
});
test('rejects empty, whitespace-only and non-string values', () => {
assert.equal(isValidTitle(''), false);
assert.equal(isValidTitle(' '), false);
assert.equal(isValidTitle(42), false);
});
test('accepts exactly 80 characters but rejects 81', () => {
assert.equal(isValidTitle('a'.repeat(80)), true);
assert.equal(isValidTitle('a'.repeat(81)), false);
});
