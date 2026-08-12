const nums = [1, 2, 3, 4];

// Polyfill for map
// The callback receives: current value, index, and the full array.
Array.prototype.myMap = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }

  return result;
};

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }

  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // If no initial value is provided, start with the first array item.
  if (initialValue === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let index = startIndex; index < this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }

  return accumulator;
};

const multipleNums = nums.myMap((num) => num * 3);
console.log(multipleNums);

const moreThanTwo = nums.myFilter((num) => num > 2);
console.log(moreThanTwo);

const sum = nums.myReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
