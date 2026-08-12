require("./polyfills");

const assert = require("node:assert/strict");

const numbers = [1, 2, 3, 4];

assert.deepEqual(numbers.myMap((number) => number * 3), [3, 6, 9, 12]);
assert.deepEqual(numbers.myFilter((number) => number > 2), [3, 4]);
assert.equal(numbers.myReduce((total, number) => total + number, 0), 10);
assert.equal([1, -1].myReduce((total, number) => total + number, 0), 0);
assert.equal([1, 2, 3].myReduce((total, number) => total + number), 6);
assert.throws(() => [].myReduce((total, number) => total + number), TypeError);

const sparse = [1, , 3];
assert.deepEqual(sparse.myMap((number) => number * 2), sparse.map((number) => number * 2));
assert.deepEqual(sparse.myFilter(Boolean), sparse.filter(Boolean));

console.log("All array polyfill tests passed.");
