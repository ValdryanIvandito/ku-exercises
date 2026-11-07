// Void Function Declaration
function helloWorld() {
  console.log("Hello World");
}

// Function Declaration with One Parameter
function getCircleArea(radius) {
  return Math.PI * radius ** 2;
}

// Function Declaration with Two Parameters
function getRectangleArea(length, width) {
  return length * width;
}

// How to use Functions
helloWorld();
console.log(getCircleArea(7));
console.log(getRectangleArea(2, 5));

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Function Expression
const greeting = function (name) {
  return `Hello, my name is ${name}`;
};

// Function Expression - Arrow Function with One Parameter
const circlePerimeter = (radius) => {
  return 2 * Math.PI * radius;
};

// Function Expression - Arrow Function with Two Parameters
const rectanglePerimeter = (length, width) => {
  return 2 * (length + width);
};

// How to Use Functions
console.log(greeting("Valdryan"));
console.log(circlePerimeter(7));
console.log(rectanglePerimeter(5, 4));

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Implementation of HIGHER-ORDER Function

// Callback functions for math operation using arrow function with return
const addition = (i, j) => i + j;
const subtraction = (i, j) => i - j;
const multiplication = (i, j) => i * j;
const division = (i, j) => i / j;

// HIGHER-ORDER Function
function calculateTwoNumbers(i, j, operation) {
  return operation(i, j);
}

// How to Use Functions
console.log(calculateTwoNumbers(10, 5, addition));
console.log(calculateTwoNumbers(10, 5, subtraction));
console.log(calculateTwoNumbers(10, 5, multiplication));
console.log(calculateTwoNumbers(10, 5, division));
