// BASIC MUTATION METHODS

// push: Adds one or more elements to the end of an array and returns the NEW length
const fruits = ["apple", "banana"];
console.log("Original Fruit List: ", fruits);
console.log("\n");

const pushedFruit = fruits.push("cherry");
console.log("After pushed: ", fruits); // Expected result: [ 'apple', 'banana', 'cherry' ]
console.log("Fruits length: ", pushedFruit); // Expected result: 3 (push returns the new length, NOT the added element)
console.log("\n");

// pop: Removes the last element from an array and returns the removed element
const poppedFruit = fruits.pop();
console.log("Popped fruit: ", poppedFruit); // Expected result: "cherry"
console.log("After popped: ", fruits); // Expected result: [ 'apple', 'banana' ]
console.log("\n");

// shift: Removes the first element from an array and returns the removed element
const shiftedFruit = fruits.shift();
console.log("Shifted fruit: ", shiftedFruit); // Expected result: "apple"
console.log("After shifted: ", fruits); // Expected result: [ 'banana' ]
console.log("\n");

// unshift: Adds one or more elements to the beginning of an array and returns the NEW length
const unshiftedFruits = fruits.unshift("strawberry", "blueberry");
console.log("After unshifted: ", fruits); // Expected result: [ 'strawberry', 'blueberry', 'banana' ]
console.log("Fruits length: ", unshiftedFruits); // Expected result: 3

// =======================================================================================================
console.log("\n");
console.log("\n");
// =======================================================================================================

// SLICE, SPLICE & CONCAT

// slice: Returns a shallow copy of a portion of an array (non-destructive - the original array is never changed)
// Syntax: arr.slice(start, end) - 'start' is inclusive, 'end' is EXCLUSIVE, negative indices count from the end; both are optional
const numbers = [10, 20, 30, 40, 50];

const slicedNumbers = numbers.slice(1, 4); // Extracts elements from index 1 up to (but NOT including) index 4
console.log("Sliced portion: ", slicedNumbers); // Expected result: [20, 30, 40]
console.log("Original array: ", numbers); // Expected result: [10, 20, 30, 40, 50] (unchanged)
console.log("\n");

// splice: Changes array contents by removing, replacing, or adding elements (destructive - mutates the original array)
// Syntax: arr.splice(start, deleteCount, item1, ..., itemN) - it also RETURNS the deleted elements
const colors = ["red", "green", "blue"];

// Remove 1 element at index 1 and insert "yellow" in its place
const deletedColors = colors.splice(1, 1, "yellow");
console.log("After splice: ", colors); // Expected result: [ 'red', 'yellow', 'blue' ]
console.log("Deleted items: ", deletedColors); // Expected result: [ 'green' ]
console.log("\n");

// concat: Merges two or more arrays and returns a NEW array (non-destructive)
const arr1 = [1, 2];
const arr2 = [3, 4];

const mergedArr = arr1.concat(arr2);
console.log("Merged array: ", mergedArr); // Expected result: [ 1, 2, 3, 4 ]
console.log("Original arr1: ", arr1); // Expected result: [ 1, 2 ] (proof that concat is non-destructive)

// =======================================================================================================
console.log("\n");
console.log("\n");
// =======================================================================================================

// HIGHER-ORDER ARRAY METHODS

// forEach: Executes a callback function once for each element
animals.forEach((animal, index) => {
  console.log(`Index: ${index}, Animal: ${animal}`);
});
console.log("\n");

// indexOf: Returns the FIRST index at which a given element is found, or -1 when it is not found
const fruitsList = ["apple", "banana", "orange", "banana"];
console.log("Index of 'banana' (first match): ", fruitsList.indexOf("banana")); // Expected result: 1
console.log("Index of 'grape' (not found): ", fruitsList.indexOf("grape")); // Expected result: -1
console.log("\n");

// includes: Determines whether an array contains a certain value (returns true/false)
console.log("Includes 'orange'?: ", fruitsList.includes("orange")); // Expected result: true (preferred over indexOf if you only need existence)
console.log("Includes 'grape'?: ", fruitsList.includes("grape")); // Expected result: false
console.log("\n");

// map: Creates a NEW array populated with the results of calling the callback on EVERY element
const originalNumbers = [1, 2, 3, 4];
const squaredNumbers = originalNumbers.map((num) => num * num);
console.log("Squared numbers: ", squaredNumbers); // Expected result: [ 1, 4, 9, 16 ]
console.log("Original numbers: ", originalNumbers);

// filter: Creates a NEW array containing all elements that PASS the test implemented by the callback
const ages = [12, 18, 22, 16, 25];
const adults = ages.filter((age) => age >= 18);
console.log("Adults (>= 18): ", adults); // Expected result: [ 18, 22, 25 ]
console.log("Original ages: ", ages);
console.log("\n");

// =======================================================================================================
console.log("\n");
console.log("\n");
// =======================================================================================================

// MORE ESSENTIAL METHODS: at, join & flat

// at: Accesses an element by index, supports negative indices (returns undefined when out of range)
const letters = ["a", "b", "c", "d"];
console.log("at(1): ", letters.at(1)); // Expected result: "b"
console.log("at(-1): ", letters.at(-1)); // Expected result: "d" (unlike plain num-length indexing)
console.log("\n");

// join: Joins all elements into a single string with a separator
const csvFruits = ["apple", "banana", "orange"];
console.log("join(', '): ", csvFruits.join(", ")); // Expected result: "apple, banana, orange"
console.log("join(''): ", csvFruits.join("")); // Expected result: "applebananaorange" (no separator)
console.log("\n");

// flat: Flattens a nested array up to the given depth (default 1)
const nested = [
  [1, 2],
  [3, [4, 5]],
];

console.log("flat(): ", nested.flat()); // Expected result: [ 1, 2, 3, [ 4, 5 ] ]
console.log("flat(2): ", nested.flat(2)); // Expected result: [ 1, 2, 3, 4, 5 ]
console.log("flat(Infinity): ", nested.flat(Infinity)); // Creates a completely flat array

// =======================================================================================================
console.log("\n");
console.log("\n");
// =======================================================================================================

// HIGHER-ORDER SEARCHING: find & findIndex

// find: Returns the FIRST element that satisfies the callback, or undefined when none matches
const scores = [30, 75, 90, 60];
console.log(
  "find(> 80): ",
  scores.find((score) => score > 80),
); // Expected result: 90
console.log("\n");

// findIndex: Returns the index of the FIRST element that satisfies the callback, or -1
console.log(
  "findIndex(> 80): ",
  scores.findIndex((score) => score > 80),
); // Expected result: 2

console.log(
  "findIndex(> 100): ",
  scores.findIndex((score) => score > 100),
); // Expected result: -1 (not found)

// =======================================================================================================
console.log("\n");
console.log("\n");
// =======================================================================================================

// HIGHER-ORDER TESTING: some & every

// some: Returns true when AT LEAST ONE element satisfies the callback
console.log(
  "some(> 80): ",
  scores.some((score) => score > 80),
); // Expected result: true (90 matches)

console.log(
  "some(> 90): ",
  scores.some((score) => score > 90),
); // Expected result: false

console.log("\n");

// every: Returns true only when ALL elements satisfy the callback
console.log(
  "every(> 20): ",
  scores.every((score) => score > 20),
); // Expected result: true

console.log(
  "every(> 60): ",
  scores.every((score) => score > 60),
); // Expected result: false

// =======================================================================================================
console.log("\n");
console.log("\n");
// =======================================================================================================

// ACCUMULATING VALUES: reduce

// reduce: Folds all elements into a single value (sum, product, or any accumulated result)
// Callback signature: (accumulator, currentElement) => new value for the accumulator
const totalPrice = [1000, 2500, 500].reduce(
  (accumulator, price) => accumulator + price,
  0, // Initial value of the accumulator
);
console.log("reduce (sum): ", totalPrice); // Expected result: 4000
console.log("\n");

// reduce can also build up objects - counting the occurrence of each word:
const words = ["red", "blue", "red", "green", "red"];
const wordCounts = words.reduce((counts, word) => {
  counts[word] = (counts[word] || 0) + 1;
  return counts;
}, {});
console.log("reduce (object): ", wordCounts); // Expected result: { red: 3, blue: 1, green: 1 }

// =======================================================================================================
console.log("\n");
console.log("\n");
// =======================================================================================================

// DESTRUCTIVE METHODS: sort, reverse & fill

// sort: Sorts the ORIGINAL array in place (default sorting is lexicographic - numbers get converted to strings!)
const digits = [10, 1, 5, 100];
console.log("sort() default: ", digits.slice().sort()); // Expected result: [ 1, 10, 100, 5 ] (NOT numeric order)
console.log(
  "sort((a, b) => a-b): ",
  [10, 1, 5, 100].slice().sort((a, b) => a - b),
); // Expected result: [ 1, 5, 10, 100 ] (always pass a comparator for numbers)
console.log("Original unchanged: ", digits); // Expected result: [10, 1, 5, 100] (slice() was used to protect the original)
console.log("\n");

// reverse: Reverses the ORIGINAL array in place (destructive)
const countdown = [1, 2, 3];
console.log("reverse(): ", countdown.slice().reverse()); // Expected result: [ 3, 2, 1 ]
console.log("Original unchanged: ", countdown); // Expected result: [ 1, 2, 3 ] (slice() was used to protect the original)
console.log("\n");

// fill: Replaces every element in the given index range with a fixed value (destructive)
const zeros = [1, 2, 3, 4, 5];
zeros.fill(0, 1, 4); // Fill with 0 from index 1 up to (but NOT including) index 4
console.log("fill(0, 1, 4): ", zeros); // Expected result: [ 1, 0, 0, 0, 5 ]
console.log(
  "Original values are LOST: use fill carefully after creating the array",
);
