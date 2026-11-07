// HOW TO ACCESS A VALUE

const person = {
  name: "John Doe",
  age: 33,
};

// Accessing a value using dot notation
const personName = person.name;
console.log(personName);

// Accessing a value using bracket notation
const personAge = person["age"];
console.log(personAge);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// HOW TO ACCESS A NESTED PROPERTY

const pet = {
  cat: {
    name: "Snowy",
    breed: "Persian",
  },
  age: 1,
};

// Accessing a nested property inside cat using dot notation
const petName = pet.cat.name;
console.log(petName);

// Accessing a nested property inside cat using bracket notation
const petBreed = pet["cat"]["breed"];
console.log(petBreed);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// HOW TO SET, ADD, UPDATE, CHECK AND DELETE A PROPERTY

// Setting a property using shorthand property notation
const category = "Procie";

const product = {
  name: "Ryzen 9 7900",
  category,
};
console.log(product);

// Adding a new property using dot notation
product.brand = "AMD";
console.log(product);

// Updating an existing property value using dot notation
product.category = "Processor";
console.log(product);

// Deleting a property after checking its existence
// The in operator checks both own and inherited properties
if ("category" in product) delete product.category;
console.log(product);

// Deleting an own property after checking its existence
// Object.hasOwn() checks only own properties, not inherited ones
if (Object.hasOwn(product, "brand")) delete product.brand;
console.log(product);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// HOW TO COPY AN OBJECT INTO A NEW OBJECT

const customerWallet = {
  id: "001",
  name: "Budi Cayho",
  balance: "77000",
};
console.log("customerWallet: ", customerWallet);

// Copying customerWallet into newCustomerWallet using Object.assign()
const newCustomerWallet = Object.assign({}, customerWallet);
console.log("newCustomerWallet: ", newCustomerWallet);

// Copying customerWallet into newCustomerWalletV2 using spread operator
const newCustomerWalletV2 = { ...customerWallet };
console.log("newCustomerWallet2: ", newCustomerWalletV2);

// HOW TO MERGE OBJECTS
const customerAddress = {
  address: "Jl. Tebet no.7",
  city: "Jakarta",
  country: "Indonesia",
};
console.log("customerAddress: ", customerAddress);

// Merging customerWallet and customerAddress using Object.assign()
const customerData = Object.assign({}, customerWallet, customerAddress);
console.log("customerData: ", customerData);

// Merging customerWallet and customerAddress using spread operator
const customerDataV2 = { ...customerWallet, ...customerAddress };
console.log("customerDataV2: ", customerDataV2);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// OBJECT DESTRUCTURING

const course = {
  id: 1,
  title: "JavaScript Fundamentals",
  price: 350000,
  mentor: {
    name: "Jane Doe",
    rating: 4.9,
  },
};

// Extracting properties into variables
const { id, title, price } = course;
console.log(`id: ${id} - title: ${title} - price: ${price}`);

// Using a default value for a property that does not exist
const { discount = 0 } = course;
console.log(`discount: ${discount}`);

// Renaming a variable while destructuring
const { title: courseTitle } = course;
console.log(`courseTitle: ${courseTitle}`);

// Destructuring a nested object
const { mentor } = course;
console.log(`mentor: ${mentor.name} - rating: ${mentor.rating}`);

const { name: mentorName, rating: mentorRating } = course.mentor;
console.log(`mentorName: ${mentorName} - mentorRating: ${mentorRating}`);

// Destructuring combined with the rest operator
const { id: moduleId, ...rest } = course;
console.log(`moduleId: ${moduleId}`);
console.log("rest: ", rest);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// HOW TO ITERATE AN OBJECT

const countryCodes = {
  62: "Indonesia",
  86: "China",
  1: "United States",
};

for (const code in countryCodes) {
  console.log(`Country Code: ${code} - Country Name: ${countryCodes[code]}`);
}

/*
  Result:
  Country Code: 1 - Country Name: United States
  Country Code: 62 - Country Name: Indonesia
  Country Code: 86 - Country Name: China
*/

const pets = {
  cat: "Garfield",
  rabbit: "Shiro",
  dog: "Snowy",
};

for (const pet in pets) {
  console.log(`Pet: ${pet} - Name: ${pets[pet]}`);
}

/* 
  Result:
  Pet: cat - Name: Garfield
  Pet: rabbit - Name: Shiro
  Pet: dog - Name: Snowy
*/

/*
  Important notes about order rules:
  - Integer properties are sorted
  - Others appears the same like it's defined
*/
