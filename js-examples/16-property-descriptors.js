// A property descriptor is an object that describes a property's attributes:
// value, writable, enumerable, and configurable

// GET THE DESCRIPTOR

const person = {
  name: "Valdryan",
  age: 25,
  city: "Denpasar",
};

// Get the descriptor of a single property
console.log(Object.getOwnPropertyDescriptor(person, "city"), "\n");

// Get the descriptors of all properties at once
console.log(Object.getOwnPropertyDescriptors(person));

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// DEFINE A NEW PROPERTY WITH A FULL DESCRIPTOR

const cat = {};

// creates a new property with explicit descriptor flags
Object.defineProperty(cat, "breed", {
  value: "persian",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptors(cat));

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// NEW PROPERTY WITH ONLY writable: true

const dog = {};

// Flags left out of defineProperty default to false, so enumerability and configurability are disabled here
Object.defineProperty(dog, "breed", {
  value: "doberman",
  writable: true,
});

console.log(Object.getOwnPropertyDescriptors(dog));

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// OBJECT SEAL

/* Object.seal() sets writable = true, enumerable = true, configurable = false
   on every property: values can still change, but properties can't be added or removed
*/

const ErrorCode = Object.seal({
  "000": "Application Crash",
  "001": "Camera Error",
  "002": "Printer Error",
});

console.log(Object.getOwnPropertyDescriptors(ErrorCode));

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// OBJECT FREEZE

/* 
  Object.freeze() sets writable = false, enumerable = true, configurable = false
  on every property: nothing can change, be added, or be removed
*/

const HttpStatusCode = Object.freeze({
  200: "ok",
  201: "created",
  301: "redirect",
  400: "bad request",
  404: "not found",
  500: "server error",
});

console.log(Object.getOwnPropertyDescriptors(HttpStatusCode));
