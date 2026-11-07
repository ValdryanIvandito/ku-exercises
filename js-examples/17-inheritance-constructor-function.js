// EXAMPLE 1: INSTANCE METHODS — recreated for every instance, wastes memory

function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.getArea = function () {
    return this.width * this.height;
  };
}

const rectangle1 = new Rectangle(5, 2);
const rectangle2 = new Rectangle(3, 3);

console.log(rectangle1.getArea()); // Output: 10
console.log(rectangle2.getArea()); // Output: 9

// Each instance owns a separate copy, so the references differ
console.log(rectangle1.getArea == rectangle2.getArea); // Output: false

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// EXAMPLE 2: PROTOTYPE METHODS — defined once, shared by all instances

function RectangleV2(width, height) {
  this.width = width;
  this.height = height;
}

RectangleV2.prototype.getArea = function () {
  return this.width * this.height;
};

const rectangle1V2 = new RectangleV2(5, 2);
const rectangle2V2 = new RectangleV2(3, 3);

console.log(rectangle1V2.getArea()); // Output: 10
console.log(rectangle2V2.getArea()); // Output: 9

// Both instances share the same prototype function
console.log(rectangle1V2.getArea === rectangle2V2.getArea); // Output: true

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// EXAMPLE 3: PROTOTYPE INHERITANCE CHAIN

// PARENT
function Color(color) {
  this.color = color;
}

Color.prototype.getColor = function () {
  return `color: ${this.color}`;
};

// SUBCLASS: Color.call(this, ...) runs the parent constructor
// so inherited properties get initialized

function RectangleV3(width, height, color) {
  Color.call(this, color);

  this.width = width;
  this.height = height;
}

/* 
  WIRE UP THE PROTOTYPE CHAIN:
  WRONG: RectangleV3.prototype.__proto__ = Color.prototype (deprecated)
  RIGHT: Object.create() builds a new prototype delegating to Color.prototype
  GOTCHA: it replaces the prototype, so restore the constructor property
*/

RectangleV3.prototype = Object.create(Color.prototype, {
  constructor: {
    value: RectangleV3, // Restore the constructor link
    writable: true,
    enumerable: false,
    configurable: true,
  },
});

RectangleV3.prototype.getArea = function () {
  return this.width * this.height;
};

RectangleV3.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

// A SECOND SUBCLASS, same recipe
function Circle(radius, color) {
  Color.call(this, color); // Inherited property
  this.radius = radius; // Own property
}

Circle.prototype = Object.create(Color.prototype, {
  constructor: {
    value: Circle,
    writable: true,
    enumerable: false,
    configurable: true,
  },
});

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// TEST RUN 
const color = new Color("white");
const rectangleV3 = new RectangleV3(3, 5, "silver");
const circle = new Circle(7, "gold");

console.log(color.getColor()); // Output: "color: white"

// Own methods + getColor() inherited from Color.prototype
console.log(rectangleV3.getArea()); // Output: 15
console.log(rectangleV3.getPerimeter()); // Output: 16
console.log(rectangleV3.getColor()); // Output: "color: silver"

console.log(circle.getArea()); // Output: ~153.94
console.log(circle.getColor()); // Output: "color: gold"
