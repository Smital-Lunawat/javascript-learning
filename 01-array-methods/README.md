# Array Method Polyfills

A polyfill recreates a feature when the environment does not provide it. These educational implementations recreate the core behavior of:

- `Array.prototype.map`
- `Array.prototype.filter`
- `Array.prototype.reduce`

All three receive a callback. The callback's parameter names do not matter; their positions determine what values they receive.

```js
numbers.myMap((value, index, array) => value * 3);
numbers.myMap((banana, position, original) => banana * 3);
```

Those callbacks behave identically because `value` and `banana` are only local variable names.

## Important `reduce` detail

The initial implementation used the accumulator's truthiness to decide whether it existed:

```js
accumulator = accumulator
  ? callback(accumulator, current)
  : current;
```

That breaks when the accumulator is a valid falsy value such as `0`, `false`, or `""`. The corrected implementation checks whether an initial argument was supplied using `arguments.length`.

It also throws on an empty array with no initial value, matching native `reduce` behavior.

