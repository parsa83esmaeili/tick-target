import assert from 'node:assert/strict';
import { mul } from './mul.mjs';
assert.equal(mul(2, 3), 6);
assert.equal(mul(4, 5), 20);
console.log('mul: ok');
