// Currying

// Q1. sum(2)(6)(1)

// Method 1: Normal function without currying
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 6, 1));

// Method 2: Currying
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

// Q2. Create an evaluate function using currying.
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("subtract")(4)(2) => 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "subtract") return a - b;
      else return "Invalid operation";
    };
  };
}

console.log(evaluate("multiply")(2)(4));

const add = evaluate("sum");
console.log(add(2)(4));
console.log(add(3)(5));

// Q3. Infinite currying
// infiniteAdd(1)(2)() => 3
// infiniteAdd(1)(2)(3)(5)() => 11

function infiniteAdd(a) {
  return function (b) {
    if (b !== undefined) return infiniteAdd(a + b);
    return a;
  };
}

console.log(infiniteAdd(2)(3)(4)(5)());

