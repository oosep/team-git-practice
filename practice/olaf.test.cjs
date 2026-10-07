const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidMinutes } = require('./olaf.cjs');
test('accepts a normal number of minutes', () => {
assert.equal(isValidMinutes(25), true);
});
test('rejects invalid values', () => {
assert.equal(isValidMinutes(0), false);
assert.equal(isValidMinutes(2.5), false);
assert.equal(isValidMinutes('30'), false);
});
test('accepts the boundaries 1 and 180 but rejects 181', () => {
assert.equal(isValidMinutes(1), true);
assert.equal(isValidMinutes(180), true);
assert.equal(isValidMinutes(181), false);
});