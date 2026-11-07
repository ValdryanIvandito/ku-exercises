
// CREATING AN ITERABLE OBJECT

/*
   An object is iterable if it has a method keyed with Symbol.iterator.
   This method must return an iterator—an object with a next() method.
   The next() method returns an object with:
   - value: the next iteration value
   - done: a boolean indicating if the iteration is complete
*/

const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]: function () {
    let current = this.from;
    const last = this.to;

    // Returns the iterator object
    return {
      next: function () {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Executing Custom Range Object Iterable
for (const num of range) {
  console.log(num); // Expected result: 1, 2, 3, 4, 5
}

console.log("\n");
console.log("Range object representation:", range);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// CREATING AN ITERABLE CONSTRUCTOR FUNCTION

function Arr() {
  this.length = 0;

  this.push = function (value) {
    this[this.length] = value;
    this.length++;
  };

  this.pop = function () {
    delete this[this.length - 1];
    this.length--;
  };

  // Defining the iterator to make it compatible with for...of loops
  this[Symbol.iterator] = function () {
    let current = 0;

    return {
      next: () => {
        return current <= this.length - 1
          ? { value: this[current++], done: false }
          : { done: true };
      },
    };
  };
}

// Executing Custom Arr Instance Iterable
const animals = new Arr();

animals.push("cat");
animals.push("dog");
animals.push("bird");

for (const animal of animals) {
  console.log(animal); // Expected result: cat, dog, bird
}

console.log("\n");
console.log("Custom Arr Instance representation:", animals);
