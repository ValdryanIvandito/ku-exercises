// UNDERSTANDING ARRAYS AS OBJECTS

// Basic concept: an array is just an object under the hood - indexed keys plus a length property

const animalsObj = {
  0: "cat",
  1: "dog",
  2: "tiger",
  3: "horse",

  length: 4,

  push: function (value) {
    this[this.length] = value;
    this.length++;
  },

  pop: function () {
    delete this[this.length - 1];
    this.length--;
  },

  unshift: function (value) {
    for (let i = this.length; i > 0; i--) {
      this[i] = this[i - 1];
    }
    this[0] = value;
    this.length++;
  },

  shift: function () {
    if (this.length === 0) return;
    const first = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return first;
  },
};

// Demonstrating that the object behaves like an array
console.log("Initial animalObj: ", animalsObj);
console.log("Accessing index 1: ", animalsObj[1]); // Expected result: "dog"
console.log("Current length: ", animalsObj.length); // Expected result: 4
console.log("\n");

// Pushing a new element (simulates Array.prototype.push)
animalsObj.push("rabbit");
console.log("animalObj after pushed: ", animalsObj);
console.log("\n");

// Removing the last element (simulates Array.prototype.pop)
animalsObj.pop();
console.log("animalObj after popped: ", animalsObj);
console.log("\n");

// Adding a new element to the beginning (simulates Array.prototype.unshift - requires reindexing all elements)
animalsObj.unshift("bird");
console.log("animalObj after unshifted: ", animalsObj);
console.log("\n");

// Removing the first element (simulates Array.prototype.shift - it returns the removed element)
animalsObj.shift();
console.log("animalObj after shifted: ", animalsObj);
console.log("\n");

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// CREATING A REUSABLE ARRAY-LIKE USING A CONSTRUCTOR FUNCTION

// Constructor function that bundles the array-like behavior so it can be reused for every instance
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

  this.unshift = function (value) {
    for (let i = this.length; i > 0; i--) {
      this[i] = this[i - 1];
    }
    this[0] = value;
    this.length++;
  };

  this.shift = function () {
    if (this.length === 0) return;
    const first = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return first;
  };
}

// Creating a new instance of the constructor
const animalsArr = new Arr();

// Pushing five elements into the instance
animalsArr.push("cat");
animalsArr.push("dog");
animalsArr.push("tiger");
animalsArr.push("horse");
animalsArr.push("rabbit");

// Demonstrating that the constructor function behaves like an array
console.log("animalsArr after pushed :", animalsObj);
console.log("Accessing index 1 :", animalsObj[1]); // Expected result: "dog"
console.log("Current length :", animalsObj.length); // Expected result: 4
console.log("\n");

// Removing one element from the instance
animalsArr.pop();
console.log("animalsArr after popped: ", animalsArr);
console.log("\n");

// Adding a new element to the beginning of the instance
animalsArr.unshift("bird");
console.log("animalsArr after unshifted: ", animalsArr);
console.log("\n");

// Removing the first element from the instance (shift returns the removed element)
animalsArr.shift();
console.log("animalsArr after shifted: ", animalsArr);
console.log("\n");

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// ARRAY LITERAL NOTATION

// Creating an array using the literal notation (best practice - shorter and safer than the constructor)
const animals = ["cat", "dog", "tiger", "horse"];

// Accessing elements by index and reading the length property
console.log("Initial animals: ", animals);
console.log("Accessing index 1: ", animals[1]); // Expected result: "dog"
console.log("\n");

// // Modifying Element
animals[2] = "rabbit";
console.log("animals after modifying index-2: ", animals);

// Adding a new element to the end of the array
animals.push("rabbit");
console.log("animals after pushed: ", animals);
console.log("\n");

// Removing the last element from the array
animals.pop();
console.log("animals after popped: ", animals);
console.log("\n");

// Adding a new element to the beginning of the array (built-in Array.prototype.unshift)
animals.unshift("bird");
console.log("animals after unshifted: ", animals);
console.log("\n");

// Removing the first element from the array (built-in Array.prototype.shift, returns the removed element)
animals.shift();
console.log("animals after shifted: ", animals);
console.log("\n");

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// ITERATING AN ARRAY

/*
   Note: Using for...in loop over an array is discouraged because:
   1. It iterates over the array indices as strings (e.g. "0", "1", "2") rather than numbers.
   2. It also iterates over any custom user-defined properties added to the array object.
*/

// Iterating an array with for...of (the recommended loop - receives the VALUE directly and respects break/continue)

const pets = ["cat", "dog", "rabbit"];

for (const pet of pets) {
  console.log(pet);
}

// Iterating an array with forEach (only array method, works with both the value and the index)

/*
   Note: differences between for...of and forEach:
   1. for...of can be stopped early with break/continue, forEach always runs to completion
   2. for...of works on any iterable (strings, Maps, Sets...), forEach only exists on arrays
   3. forEach receives both the element and its index via callback parameters, for...of needs entries() for the index
*/

const catBreeds = ["persian", "ragdoll", "bengal"];

catBreeds.forEach((breed, index) => {
  console.log(`Breed-${index}: ${breed}`);
});

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// ARRAY DESTRUCTURING

const fullName = ["Valdryan", "Ivandito"];
const [firstName, lastName] = fullName;

console.log("Firstname: ", firstName);
console.log("Lastname: ", lastName);
