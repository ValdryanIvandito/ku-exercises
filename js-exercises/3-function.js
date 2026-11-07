// ============================================================
// EXERCISE: FUNCTION DECLARATION & FUNCTION EXPRESSION
// Solve each problem below by writing your code under the
// problem's comment. Run with: node js-exercises/function.js
// from inside the ku-examples folder
// ============================================================

// ============================================================
// EVALUATION RESULT (by opencode)
//
// Overall score : 9/10
// Status        : PASSED - Ready to continue to the next topic
//
// What was done well:
//   - Correct usage of function declaration vs expression vs
//     arrow function (knows when to use each)
//   - Understands return vs console.log (P2, P3)
//   - Default parameter used correctly (P6)
//   - Callback concept is solid: function as a value passed
//     as an argument (P5, P8) - often hard for beginners
//   - Good habits: early return (P7), loop over manual work,
//     named constant MAX_ITERATION, clean helper functions
//
// Bug found (P4, line 73):
//   Math.ceil(Math.random() * (max - min)) + min
//   - Math.random() returns [0, 1) -> ceil(rand * 5) = 1..5
//   - + min (1) shifts it to 2..6 -> the number 1 can NEVER
//     be rolled
//   Fix:
//     Math.floor(Math.random() * (max - min + 1)) + min
//   or simpler (min = 1): Math.ceil(Math.random() * max)
//   Lesson: always verify the boundary of a generated range,
//   not just that the code "runs".
//
// Next steps:
//   1. Redo P4 until the random-range formula is automatic
//   2. Continue to: scope & closure
//   3. Then: higher-order array methods (map, filter, reduce)
//      - your P8 is literally the concept behind .map()
// ============================================================

// PROBLEM 1 - Function Declaration
// Create a function declaration named `greet` that takes one
// parameter `name` and prints "Hello, <name>!" to the console.
// Call the function with your own name.
//
// Example output: Hello, Andi!
//
// answer:

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Andi");

// PROBLEM 2 - Function Expression
// Create a function expression (an anonymous function stored
// in a variable) named `introduce` that takes the parameters
// `name` and `age`, then RETURNS (not console.log) the string:
// "My name is <name>, I am <age> years old."
// Store the result in a variable `bio` and console.log it.
//
// answer:

const introduce = function (name, age) {
  return `My name is ${name}, I am ${age} years old.`;
};

const bio = introduce("Andi", 25);

console.log(bio);

// PROBLEM 3 - Function with return value
// Create a function declaration named `rectangleArea` that
// takes the parameters `length` and `width`, then returns
// the area (length * width).
// Console.log the result of calling it with length=5, width=3.
//
// Expected output: 15
//
// answer:

function rectangleArea(length, width) {
  return length * width;
}

const length = 5;
const width = 3;

console.log(rectangleArea(length, width));

// PROBLEM 4 - Function without parameters
// Create a function named `rollDice` that returns a random
// number between 1 and 6 (like rolling a die).
// Hint: use Math.random() and Math.floor().
// Call it 3 times and console.log each result.
//
// answer:

const MAX_ITERATION = 3;

function rollDice() {
  const min = 1;
  const max = 6;

  // Old Answer
  // return Math.ceil(Math.random() * (max - min)) + min;

  // Fixed
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < MAX_ITERATION; i++) {
  console.log(rollDice());
}

// PROBLEM 5 - Function as an argument (function inside a function)
// Create a function declaration `calculate` that takes 2 parameters:
//   - `number` (a number)
//   - `operation` (a function)
// `calculate` must return the result of `operation(number)`.
// All of the following must be done WITHOUT modifying `calculate`:
//   1. Create a function expression `timesTen` that multiplies
//      the number by 10.
//   2. Create an arrow function `square` that returns the
//      number squared.
//   3. Console.log calculate(5, timesTen)        -> expected: 50
//   4. Console.log calculate(5, square)          -> expected: 25
//
// answer:

const timesTen = function (number) {
  return number * 10;
};

const square = (number) => {
  return number ** 2;
};

function calculate(number, operation) {
  return operation(number);
}

console.log(calculate(5, timesTen));
console.log(calculate(5, square));

// PROBLEM 6 - Function in a variable & default parameter
// Create an arrow function `greetTime` with 2 parameters:
//   - `name`
//   - `timeOfDay` with a default value of "morning"
// It should return "Good <timeOfDay>, <name>!" (no spaces
// inside <name>).
// Call it twice:
//   1. greetTime("Budi", "evening")
//   2. greetTime("Budi")          // default value is used
// Console.log both results.
//
// Expected output:
// Good evening, Budi!
// Good morning, Budi!
//
// answer:

const greetTime = (name, timeOfDay = "morning") => {
  return `Good ${timeOfDay}, ${name}!`;
};

console.log(greetTime("Budi", "evening"));
console.log(greetTime("Budi"));

// PROBLEM 7 - Wrapping logic (reusable function)
// Create a function `average` that takes an array of numbers
// and returns its average. If the array is empty, return 0.
// Hint: use a loop or for...of, do NOT use
// reduce yet (not learned so far).
// Tests:
//   console.log(average([10, 20, 30]));   -> expected: 20
//   console.log(average([]));             -> expected: 0
//
// answer:

function average(arrOfNum) {
  if (arrOfNum.length === 0) return 0;

  let totalOfNum = 0;

  for (const num of arrOfNum) {
    totalOfNum = totalOfNum + num;
  }

  return totalOfNum / arrOfNum.length;
}

console.log(average([10, 20, 30]));
console.log(average([]));

// PROBLEM 8 - Simple callback (challenge)
// Create a function `processArray` that takes 2 parameters:
//   - `arr` (array of numbers)
//   - `fn` (a function)
// `processArray` returns a NEW array containing the result
// of fn for each element of arr (use a loop, do NOT use map).
// Then, use processArray with an anonymous arrow function
// passed directly in the call to double every element:
//   console.log(processArray([1, 2, 3], (n) => n * 2));
// Expected output: [2, 4, 6]
//
// answer:

function processArray(arr, fn) {
  const newArr = [];

  for (const num of arr) {
    newArr.push(fn(num));
  }

  return newArr;
}

console.log(processArray([1, 2, 3], (n) => n * 2));