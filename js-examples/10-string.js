// STRING BASICS & CHARACTER ACCESS

// Basic String Concept (a string is a sequence of characters)
const str = "Hello";

console.log("The word is :", str);
console.log(`The length of ${str} is ${str.length}`); // .length is a property, not a function/method

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Accessing Characters with Positive Index
console.log("1st Char is: ", str.at(0)); // H
console.log("2nd Char is: ", str.at(1)); // e
console.log("3rd Char is: ", str.at(2)); // l
console.log("4th Char is: ", str.at(3)); // l
console.log("5th Char is: ", str.at(4)); // o

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Accessing Characters with Negative Index & Out of Range
console.log("1st Char from back is: ", str.at(-1)); // o
console.log("2nd Char from back is: ", str.at(-2)); // l
console.log("3rd Char from back is: ", str.at(-3)); // l
console.log("4th Char from back is: ", str.at(-4)); // e
console.log("5th Char from back is: ", str.at(-5)); // H
console.log("Out of range (-6)     : ", str.at(-6)); // undefined
console.log("Out of range (10)     : ", str.at(10)); // undefined

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// STRING LITERALS & SPECIAL CHARACTERS

// Standard Quote Styles
// - Airbnb style uses Single Quote ('Hello')
// - jQuery style uses Double Quote ("Hello")
// - HTML attributes use Double Quote
const msg1 = 'He replied "OK"'; // Using single quote when the string contains double quotes

console.log(msg1);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Special Characters (Escape Characters)
/*
    \n -> New line
    \b -> Backspace
    \t -> Tab
    \" -> Double quotes
    \' -> Single quotes
    \\ -> Backslash
    \v -> Vertical Tab
    \r -> Carriage Return
*/
const msg2 = 'He replied "OK"'; // Using a backslash (\) before double quotes inside a double-quoted string

console.log(msg2);
console.log("Tab example:\tA\tB"); // Tab character example

// =======================================================================================================
console.log("\n");
// =======================================================================================================

const msg3 = "Error occurred\nPlease try again\nContact admin for support"; // Creating a new line with \n

console.log(msg3);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// TEMPLATE LITERALS

// Using Backticks & Expression Interpolation
const firstName = "John";
const lastName = "Doe";
const age = 20;

// Old Way: String Concatenation (+)
const message1 =
  "Hello, " + firstName + " " + lastName + ", You are " + age + " years old.";
console.log("Old Way:", message1);

// New Way: Template Literals (${expression})
const message2 = `Hello, ${firstName} ${lastName}, You are ${age} years old.`;

console.log("New Way:", message2);
console.log("Math in template literal:", `5 + 3 = ${5 + 3}`); // Any expression can be interpolated

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Multi-line String with Template Literals
const message3 = `Error occurred

Please try again`;
console.log(message3); // Displays new lines exactly as written in the code

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// STRING METHODS

// Case Conversion (toUpperCase & toLowerCase)
const str2 = " Hello World ";

console.log("Uppercase:", str2.toUpperCase());
console.log("Lowercase:", str2.toLowerCase());

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Removing Whitespace (Trim)
console.log("trim()     :", `'${str2.trim()}'`); // Removes whitespace from start and end
console.log("trimStart():", `'${str2.trimStart()}'`); // Removes whitespace from start only
console.log("trimEnd()  :", `'${str2.trimEnd()}'`); // Removes whitespace from end only

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Finding Characters & Words (Search Methods)
const str3 = "Javascript is fun";

console.log(`Position of 'is'   : ${str3.indexOf("is")}`); // Index of the first occurrence
console.log(`Position of 'fun'  : ${str3.indexOf("fun")}`);
console.log(`Position of 'Java' : ${str3.indexOf("Java")}`);
console.log(`Last position of 'fun' : ${str3.lastIndexOf("fun")}`); // -1 when not found, otherwise the last occurrence

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Checking if the string contains a specific word (includes)
if (str3.includes("fun")) {
  console.log(`The word "fun" is found in the sentence "${str3}"`);
}

if (!str3.includes("Python")) {
  console.log('The word "Python" is NOT found in the sentence');
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Checking start and end of string (startsWith & endsWith)
const url = "https://example.com/about";

if (url.startsWith("https://")) {
  console.log("URL uses secure protocol (https)");
}

const fileName = "image.jpg";

if (fileName.endsWith(".jpg")) {
  console.log("File is a JPG image format");
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// GETTING SUBSTRINGS

// Extracting substrings (slice vs substring)
/*
   Methods that can be used:
   - .slice(start, end) -> Most recommended (best practice) because it is flexible and supports negative indices
   - .substring(start, end) -> Less flexible because it does not support negative indices
   - .substr() -> DEPRECATED (do not use anymore)

   Note: 'start' index is inclusive, 'end' index is exclusive.
*/
const str4 = "Hello World";

console.log("slice(0, 5)   :", str4.slice(0, 5)); // Hello
console.log("slice(6, 11)  :", str4.slice(6, 11)); // World
console.log("slice(6)      :", str4.slice(6)); // World (until the end)
console.log("slice(-1)     :", str4.slice(-1)); // d
console.log("slice(-2)     :", str4.slice(-2)); // "ld"
console.log("slice(-6)     :", str4.slice(-6)); // " World" (includes leading space)
console.log("slice(-6, -1) :", str4.slice(-6, -1)); // " Worl"
console.log("slice(-6, -2) :", str4.slice(-6, -2)); // " Wor"

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// SPLITTING & JOINING STRINGS

// Splitting a string into an array (.split)
/*
   The .split(separator, limit) method divides a string into an ordered list of substrings,
   puts these substrings into an array, and returns the array.
*/
const sentence = "JavaScript is very fun";
const words = sentence.split(" "); // Split by space

console.log("Original sentence :", sentence);
console.log("Split by space    :", words); // [ 'JavaScript', 'is', 'very', 'fun' ]

// =======================================================================================================
console.log("\n");
// =======================================================================================================

const chars = sentence.split(""); // Split by every character

console.log("Split by character (first 10):", chars.slice(0, 10));

console.log("\n");

const csvData = "apple,banana,orange";
const fruits = csvData.split(","); // Split by comma

console.log("Split CSV data    :", fruits); // [ 'apple', 'banana', 'orange' ]

// Joining an array back into a string (.join) - the reverse of .split
console.log("Join by ', '      :", fruits.join(", ")); // "apple, banana, orange"

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// REPLACING & REPEATING STRINGS

const message = "Hi Bob, Hi Alex!";

console.log('replace("Hi", "Hello"):', message.replace("Hi", "Hello")); // Replaces only the FIRST match

console.log('replaceAll("Hi", "Hello"):', message.replaceAll("Hi", "Hello")); // Replaces ALL matches

console.log("repeat(2):", "ha".repeat(2)); // "haha", repeats the string

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// PADDING STRINGS (padStart & padEnd)

const minute = 7;
const word = "hi";

console.log("padStart(2, '0'):", minute.toString().padStart(2, "0")); // "07", useful for formatting clocks/codes
console.log("padEnd(5, '.')  :", word.padEnd(5, ".")); // "hi...", pads the end until length is 5

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// CHAINING STRING METHODS

const rawInput = "   JavaScript Is Fun   ";

const cleanTitle = rawInput.trim().toLowerCase().replace("fun", "awesome");

console.log("Chained result:", cleanTitle); // "javascript is awesome", methods can be chained because each returns a new string
console.log("Original string:", `'${rawInput}'`); // Strings are immutable: the original is NEVER changed
