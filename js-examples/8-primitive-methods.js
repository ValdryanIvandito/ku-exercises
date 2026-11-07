/* 
    Primitive Type:
    - Has no built-in methods and properties
    - Lightweight (low memory footprint, fast)

    Object Type:
    - Has methods and properties
    - Heavier performance

    Paradox: It would be nice if primitives had methods, but they are not objects
    Solution: JavaScript uses an 'Object Wrapper' (String, Number, Boolean)
    behind the scenes: the primitive is temporarily boxed into an object,
    the method is executed, and the wrapper is discarded afterwards
*/

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Converting a string to uppercase and lowercase

const str = 'Hello World!';
const strUpperCase = str.toUpperCase();
const strLowerCase = str.toLowerCase();

console.log('Original String: ', str);
console.log('UpperCase String: ', strUpperCase);
console.log('LowerCase String: ', strLowerCase);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Getting the length of a string

const greeting = 'Hello JavaScript!';

console.log('Length: ', greeting.length); // Expected result: 17 (spaces are counted)

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Accessing a character at a specific index

const city = 'Jakarta';

console.log('charAt(0): ', city.charAt(0)); // Expected result: "J"
console.log('charCodeAt(0): ', city.charCodeAt(0)); // Expected result: 74 (Unicode of "J")
console.log('city[0]: ', city[0]); // Expected result: "J" (bracket notation also works)

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Extracting a substring using slice(), substring(), and at()

const sentence = 'I love JavaScript';

console.log('slice(2): ', sentence.slice(2)); // Expected result: "love JavaScript"
console.log('slice(2, 6): ', sentence.slice(2, 6)); // Expected result: "love" (end index is excluded)
console.log('slice(-10): ', sentence.slice(-10)); // Expected result: "JavaScript" (negative index counts from the end)
console.log('substring(2, 6): ', sentence.substring(2, 6)); // Expected result: "love" (negative values are treated as 0)
console.log('at(2): ', sentence.at(2)); // Expected result: "l" (supports negative index, unlike charAt)

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Searching inside a string

const text = 'Learn JavaScript, love JavaScript';

console.log('indexOf("JavaScript"): ', text.indexOf('JavaScript')); // Expected result: 6 (first occurrence)
console.log('lastIndexOf("JavaScript"): ', text.lastIndexOf('JavaScript')); // Expected result: 23 (last occurrence)
console.log('includes("Java"): ', text.includes('Java')); // Expected result: true
console.log('startsWith("Learn"): ', text.startsWith('Learn')); // Expected result: true
console.log('endsWith("Script!"): ', text.endsWith('Script!')); // Expected result: false ("!") is missing

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Replacing and repeating parts of a string

const message = 'Hi Bob, Hi Alex!';

console.log('replace("Hi", "Hello"): ', message.replace('Hi', 'Hello')); // Expected result: "Hello Bob, Hi Alex!" (only the first match)
console.log('replaceAll("Hi", "Hello"): ', message.replaceAll('Hi', 'Hello')); // Expected result: "Hello Bob, Hello Alex!" (all matches)
console.log('repeat(3): ', 'ab '.repeat(3)); // Expected result: "ab ab ab " (repeats the string)

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Cleaning and splitting a string

const dirtyString = '   Hello World!   ';
const csv = 'apple,banana,cherry';

console.log('trim(): ', dirtyString.trim()); // Expected result: "Hello World!" (removes spaces at both ends)
console.log('trimStart(): ', dirtyString.trimStart()); // Expected result: "Hello World!   "
console.log('trimEnd(): ', dirtyString.trimEnd()); // Expected result: "   Hello World!"
console.log('split(","): ', csv.split(',')); // Expected result: ["apple", "banana", "cherry"]

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Number methods: formatting and converting

const price = 123456.789;

console.log('toFixed(2): ', price.toFixed(2)); // Expected result: "123456.79" (rounded, returns a string)
console.log('toFixed(0): ', price.toFixed(0)); // Expected result: "123457"
console.log('toString(): ', (255).toString()); // Expected result: "255"
console.log('toString(16): ', (255).toString(16)); // Expected result: "ff" (hexadecimal)
console.log('toString(2): ', (10).toString(2)); // Expected result: "1010" (binary)
console.log('toPrecision(4): ', price.toPrecision(4)); // Expected result: "1.235e+5" (4 significant digits)

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Number methods: checking values

const quantity = 42;
const balance = -1000;
const average = 0.5;

console.log('Number.isInteger(quantity): ', Number.isInteger(quantity)); // Expected result: true
console.log('Number.isInteger(average): ', Number.isInteger(average)); // Expected result: false
console.log('Math.abs(balance): ', Math.abs(balance)); // Expected result: 1000 (absolute value)
console.log('Math.round(average): ', Math.round(average)); // Expected result: 1 (rounds to the nearest integer)
console.log('Math.trunc(average): ', Math.trunc(average)); // Expected result: 0 (removes the decimal part)
console.log('Math.max(1, 5, 3): ', Math.max(1, 5, 3)); // Expected result: 5
console.log('Math.min(1, 5, 3): ', Math.min(1, 5, 3)); // Expected result: 1
console.log('parseInt("42px"): ', parseInt('42px')); // Expected result: 42 (extracts the leading integer)
console.log('parseFloat("3.14abc"): ', parseFloat('3.14abc')); // Expected result: 3.14

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Boolean methods

const isOpen = true;
const isClosed = false;

console.log('isOpen.toString(): ', isOpen.toString()); // Expected result: "true" (returns a string)
console.log('isClosed.valueOf(): ', isClosed.valueOf()); // Expected result: false (returns the primitive value itself)


// =======================================================================================================
console.log("\n");
// =======================================================================================================

