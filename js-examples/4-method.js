// DEFINING A METHOD INSIDE AN OBJECT

const rectangle = {
  length: 3,
  width: 5,

  // Method definition: uses "this" to access the object's own properties
  getArea() {
    return this.length * this.width;
  },
};

console.log(rectangle.getArea());

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// THE call() METHOD

const rectangleV2 = {
  length: 3,
  width: 5,

  getArea() {
    return this.length * this.width;
  },
};

// Problem: assigning a method to a variable loses the "this" context, so the result is NaN
const calculateArea = rectangleV2.getArea;
console.log(calculateArea());

// Solution: fixing "this" by binding it explicitly with the call() method
console.log(calculateArea.call(rectangleV2));

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// THE call() METHOD WITH ARGUMENTS

const land = {
  length: 50,
  width: 20,

  calculatePrice(pricePerSqm) {
    return this.length * this.width * pricePerSqm;
  },
};

const calculateLandPrice = land.calculatePrice;
console.log(calculateLandPrice.call(land, 100));

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// THE bind() METHOD

const cube = {
  length: 50,
  width: 20,
  height: 10,

  getVolume() {
    return this.length * this.width * this.height;
  },
};

// Problem: instead of calling .call() every time, bind "this" once and reuse the function later
const calculateVolume = cube.getVolume.bind(cube);
console.log(calculateVolume());

/* CONCLUSION
- Functions are objects, so they have their own properties and methods
- call() and bind() are built-in methods available on every function
- Use call() to invoke a function with an explicit "this" value (and pass arguments)
- Use bind() to permanently bind "this" and get a new reusable function
- bind() keeps the code cleaner when the function is called multiple times
*/
