// Object to Primitive conversion using Symbol.toPrimitive

const person = {
  name: "John",
  salary: "5000",
};

person[Symbol.toPrimitive] = function (hint) {
  if (hint === "number") return this.salary;
  return this.name;
};

console.log(+person); // Type hint is "number" (unary plus), expected result: 5000
console.log("Hello " + person); // Type hint is "default" (string concatenation), expected result: "Hello John"

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Object (created from a Constructor Function) to Primitive conversion using Symbol.toPrimitive

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;

  this[Symbol.toPrimitive] = function (hint) {
    return hint === "number" ? this.salary : this.name;
  };
}

const employee1 = new Employee("Edward", 8000);
const employee2 = new Employee("John", 5000);

console.log(employee1 - employee2); // Type hint is "number" (subtraction triggers conversion), expected result: 3000

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Object to Primitive conversion WITHOUT Symbol.toPrimitive (legacy approach with valueOf/toString)

const developer = {
  name: "John",
  salary: 5000,

  toString: function () {
    return this.name;
  },

  valueOf: function () {
    return this.salary;
  },
};

console.log(+developer); // Type hint is "number" (unary plus), valueOf() is called, expected result: 5000
console.log("Hello " + developer); // Type hint is "default", valueOf() returns a primitive so it is used, expected result: "Hello 5000"
