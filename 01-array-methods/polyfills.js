/* eslint-disable no-extend-native */

// Educational polyfills for Array.prototype.map, filter, and reduce.
// Native array methods should normally be preferred in application code.

Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  const result = new Array(this.length);

  for (let index = 0; index < this.length; index += 1) {
    // Native map skips empty slots in sparse arrays.
    if (index in this) {
      result[index] = callback(this[index], index, this);
    }
  }

  return result;
};

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  const result = [];

  for (let index = 0; index < this.length; index += 1) {
    if (index in this && callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }

  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  let index = 0;
  let accumulator;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    // Without an initial value, use the first present array element.
    while (index < this.length && !(index in this)) {
      index += 1;
    }

    if (index >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = this[index];
    index += 1;
  }

  for (; index < this.length; index += 1) {
    if (index in this) {
      accumulator = callback(accumulator, this[index], index, this);
    }
  }

  return accumulator;
};

if (require.main === module) {
  const numbers = [1, 2, 3, 4];

  const tripledNumbers = numbers.myMap((number) => number * 3);
  const numbersGreaterThanTwo = numbers.myFilter((number) => number > 2);
  const sum = numbers.myReduce((total, number) => total + number, 0);

  console.log("Original:", numbers);
  console.log("Tripled:", tripledNumbers);
  console.log("Greater than two:", numbersGreaterThanTwo);
  console.log("Sum:", sum);
}
