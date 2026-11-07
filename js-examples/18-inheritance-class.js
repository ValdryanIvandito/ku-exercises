// Classes are syntactic sugar over constructor functions and prototypes.

/* 
  Class fields (public instance fields) are declared directly in the class body
  and are initialized before the constructor runs. Declaring them upfront keeps
  the object shape consistent across instances, which helps the engine
  optimize property access (hidden classes, inline caching).
*/

class Color {
  color; // declared upfront; constructor supplies the actual value

  constructor(color = "black") {
    this.color = color;
  }

  getColor() {
    return `color: ${this.color}`;
  }
}

class Rectangle extends Color {
  width;
  height;

  constructor(width, height, color) {
    super(color); // run the parent constructor
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Color {
  radius;

  constructor(radius, color) {
    super(color); // run the parent constructor
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// TEST RUN
const defaultColor = new Color(); // no argument → default color
const color = new Color("white");
const rectangle = new Rectangle(3, 5, "silver");
const circle = new Circle(7, "gold");

console.log(defaultColor.getColor()); // Output: "color: black" (constructor default)
console.log(color.getColor()); // Output: "color: white"

// Own methods + getColor() inherited from Color
console.log(rectangle.getArea()); // Output: 15
console.log(rectangle.getPerimeter()); // Output: 16
console.log(rectangle.getColor()); // Output: "color: silver"

console.log(circle.getArea()); // Output: ~153.94
console.log(circle.getColor()); // Output: "color: gold"
