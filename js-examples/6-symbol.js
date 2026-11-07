// In JavaScript, only two data types can be used as a property key: 'string' and 'symbol'

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Adding Local Symbol properties to an object

const investorProfile = {
  name: "John Doe",
  age: 33,
};

const symbolInvestorId = Symbol();
const symbolNetworth = Symbol();

investorProfile[symbolInvestorId] = "INV001";
investorProfile[symbolNetworth] = 2e6 + " " + "USD";

console.log(investorProfile);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

/*
  Symbol properties are NOT listed by standard object enumeration methods, such as:
  - Object.keys()
  - for...in
*/

for (const key in investorProfile) {
  console.log(key); // Expected result => name and age
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Adding Local Symbol properties with descriptions

const studentProfile = {
  name: "John Doe",
  age: 33,
};

const symbolStudentId = Symbol("studentId");
const symbolMajor = Symbol("major");

studentProfile[symbolStudentId] = "KU0001";
studentProfile[symbolMajor] = "Computer Science";

console.log(studentProfile);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Every Symbol() call always creates a NEW, unique Symbol - here is the proof

const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol2); // Expected result => false

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Adding Global Symbol properties (created via Symbol.for()) with descriptions

const developerProfile = {
  name: "John Doe",
  age: 33,
};

const symbolDeveloperId = Symbol.for("developerId");
const symbolRole = Symbol.for("role");

developerProfile[symbolDeveloperId] = "DEV001";
developerProfile[symbolRole] = "Frontend Developer";

console.log(developerProfile);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

/*
  Symbol.for() checks the global Symbol registry first:
  - If the given key is NOT registered yet, it creates and registers a new Symbol
  - If the given key IS already registered, it reuses (returns) the existing Symbol
  Here is the proof:
*/

const symbolA = Symbol.for('id');
const symbolB = Symbol.for('name');
const symbolC = Symbol.for('id');

console.log(symbolA === symbolB); // Expected result => false
console.log(symbolA === symbolC); // Expected result => true