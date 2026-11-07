/*
  A Constructor Function allows us to create multiple objects
  with the same structure without repeating the object definition
*/

// The constructor: called with `new` to build one Rectangle per instance
function Rectangle(length, width) {
  this.length = length;
  this.width = width;

  this.getArea = function () {
    return this.length * this.width;
  };
}

// `new` creates three distinct instances from the same blueprint
const rectangle1 = new Rectangle(5, 2);
const rectangle2 = new Rectangle(10, 3);
const rectangle3 = new Rectangle(7, 7);

// Call getArea() on each instance — `this` points to the instance it was called on
const area1 = rectangle1.getArea();
const area2 = rectangle2.getArea();
const area3 = rectangle3.getArea();

// Print the results
console.log("Area1: ", area1);
console.log("Area2: ", area2);
console.log("Area3: ", area3);