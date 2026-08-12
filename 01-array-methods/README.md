# Array Method Polyfills

A polyfill is our own implementation of a feature that JavaScript already provides. Here I practiced:

- `Array.prototype.map`
- `Array.prototype.filter`
- `Array.prototype.reduce`

All three methods receive a callback function.

The callback parameter names can be anything. Their positions decide what values they receive:

```js
numbers.myMap((value, index, array) => value * 3);
numbers.myMap((banana, position, original) => banana * 3);
```

Both callbacks work identically. `value` and `banana` are only variable names.

## What I learned about `reduce`

The initial implementation used the accumulator's truthiness to decide whether it existed:

```js
accumulator = accumulator
  ? callback(accumulator, current)
  : current;
```

This can fail when the accumulator becomes `0`, because `0` is falsy. It is simpler to decide the starting accumulator before the loop and then update it normally inside the loop.
