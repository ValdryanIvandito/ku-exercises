// NUMERIC LITERALS IN JAVASCRIPT

// Writing Numbers & Underscores
const num1 = 1000000;
const num2 = 1_000_000; // More readable with underscore separator (_)

console.log("num1:", num1);
console.log("num2:", num2);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Exponential Notation
const num3 = 1e6; // Equivalent to 1 * 10^6
const num4 = 1e3; // Equivalent to 1 * 10^3
const num5 = 1e-3; // Equivalent to 1 * 10^-3

console.log("num3 (1e6):", num3);
console.log("num4 (1e3):", num4);
console.log("num5 (1e-3):", num5);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Trailing Zeros (decimal zeros after the dot are simply ignored)
const num6 = 255.0; // Same value as 255
const num7 = 255; // Decimal zeros are ignored automatically

console.log("num6 (255.0):", num6);
console.log("num7 (255):", num7);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// CONVERSION TO ANOTHER NUMBER SYSTEM

// Converting a decimal number to another base using toString()
const binary = num6.toString(2); // Convert to binary (base 2)
const octal = num6.toString(8); // Convert to octal (base 8)
const hexadecimal = num6.toString(16); // Convert to hexadecimal (base 16)

console.log(`Decimal: ${num6}`);
console.log(`Binary: ${binary}`);
console.log(`Octal: ${octal}`);
console.log(`Hexadecimal: ${hexadecimal}`);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// SPECIAL NUMERIC VALUES

// Representation of Special Values
const notANumber = NaN; // Represents a value that is Not a Number (NaN)
const infinity = Infinity; // Represents positive Infinity
const negativeInfinity = -Infinity; // Represents negative Infinity

console.log("NaN:", notANumber, "| Typeof:", typeof notANumber);
console.log("Infinity:", infinity, "| Typeof:", typeof infinity);
console.log(
  "Negative Infinity:",
  negativeInfinity,
  "| Typeof:",
  typeof negativeInfinity,
);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Operations resulting in NaN
const num8 = 0 / 0; // Results in NaN
const num9 = Math.sqrt(-1); // Results in NaN (square root of a negative number)
const num10 = Number("a"); // Results in NaN because "a" cannot be converted to a number

console.log("0 / 0:", num8);
console.log("Math.sqrt(-1):", num9);
console.log('Number("a"):', num10);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Operations resulting in Infinity & -Infinity
const num11 = 1 / 0; // Results in Infinity
const num12 = -1 / 0; // Results in -Infinity
const num13 = 1e500; // Results in Infinity because it exceeds JavaScript's maximum number capacity

console.log("1 / 0:", num11);
console.log("-1 / 0:", num12);
console.log("1e500:", num13);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Comparing & Checking Special Values
console.log("NaN === NaN:", notANumber === NaN); // false, because NaN is not equal to anything, including itself
console.log("isNaN(NaN):", isNaN(notANumber)); // true, checks if a value is NaN
console.log("Infinity === Infinity:", Infinity === Infinity); // true
console.log("negativeInfinity === -Infinity:", negativeInfinity === -Infinity); // true

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Checking NaN safely (isNaN vs Number.isNaN)
console.log('isNaN("not a number"):', isNaN("not a number")); // true, because "not a number" is coerced to NaN first (IMPLICIT CONVERSION!)
console.log('Number.isNaN("not a number"):', Number.isNaN("not a number")); // false, checks ONLY the real NaN value without coercion (best practice)

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Floating-point precision pitfall
const sum = 0.1 + 0.2;

console.log("0.1 + 0.2          :", sum); // 0.30000000000000004, floating-point numbers cannot be represented exactly
console.log("sum === 0.3        :", sum === 0.3); // false
console.log("fix -> toFixed(1)  :", Number(sum.toFixed(1))); // 0.3, round first before comparing

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// PARSING & CONVERSION FROM STRINGS

// Using parseInt & parseFloat
const num14 = "100px";
const num14Converted = parseInt(num14); // Convert string to integer, the "px" part is ignored

console.log('parseInt("100px"):', num14Converted);

const num15 = "2.54cm";
const num15Converted = parseFloat(num15); // Convert string to floating-point (decimal)

console.log('parseFloat("2.54cm"):', num15Converted);

// Always pass the radix (base) as the second argument of parseInt
console.log('parseInt("ff", 16):', parseInt("ff", 16)); // 255, parses "ff" as hexadecimal
console.log('parseInt("0x1A"):', parseInt("0x1A")); // 26, the "0x" prefix is detected automatically
console.log('parseInt("1010", 2):', parseInt("1010", 2)); // 10, parses "1010" as binary

// Failure Cases (NaN Output)
console.log("parseInt('abc'):", parseInt("abc")); // NaN, because 'abc' cannot be converted
console.log("parseFloat('abc'):", parseFloat("abc")); // NaN

// Pitfalls vs Best Practices
console.log("parseInt(0.1):", parseInt(0.1)); // Output: 0
console.log("parseFloat(1.2):", parseFloat(1.2)); // Output: 1.2

console.log("Bad practice - parseInt(0.0000005):", parseInt(0.0000005)); // Output: 5 (because 0.0000005 is converted to string "5e-7" first by parseInt)
console.log("Best practice - Math.trunc(0.0000005):", Math.trunc(0.0000005)); // Output: 0 (safer method for truncating decimals)

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Safe integer range
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991, the largest integer that can be represented exactly

console.log("MAX_SAFE_INTEGER + 2:", Number.MAX_SAFE_INTEGER + 2); // 9007199254740992, WRONG precision - should be ...993, use BigInt instead

console.log("BigInt fix:", 9007199254740993n === 9007199254740993n); // true, BigInt handles large integers exactly
