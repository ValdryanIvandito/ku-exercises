// ============================================================
// EXERCISE: OBJECT
// ============================================================
// EVALUASI (2026-10-22) — Total: 85/100
// Problem 1: 10/10 — sempurna
// Problem 2: 6/10  — salah konsep (lihat catatan di bawah)
// Problem 3: 10/10 — sempurna, bagus pakai spread operator
// Problem 4: 8/10  — works, tapi `name: this.name` tidak perlu
// Problem 5: 10/10 — sempurna
// Problem 6: 10/10 — sempurna
// Problem 7: 9/10  — harus `return`, bukan console.log
// Problem 8: 10/10 — sempurna
// ============================================================
// Solve each problem below by writing your code under the
// problem's comment. Run with: node js-exercises/2-object.js
// from inside the ku-examples folder
// ============================================================

// PROBLEM 1 - Object literal
// Create an object named `car` using object literal syntax
// with these properties:
//   - brand: "Toyota"
//   - model: "Avanza"
//   - year: 2022
// Console.log the whole object, then console.log the `brand`
// using dot notation.
//
// Expected output:
// { brand: 'Toyota', model: 'Avanza', year: 2022 }
// Toyota
//
// answer:

const car = {
  brand: "Toyota",
  model: "Avanza",
  year: 2022,
};

console.log(car);
console.log(car.brand);

// PROBLEM 2 - Bracket notation
// For which situations do we NEED bracket notation instead
// of dot notation? Write your answer as a comment first
// (list at least 2 situations), then prove one of them:
// Create an object `person` with a property named
// "full name" (containing a space) set to "Andi Saputra".
// Console.log that property using bracket notation.
//
// EVALUASI: 6/10
// - Tidak ada komentar jawaban teori (diminta "list at least 2 situations")
// - Property-nya harusnya "full name" (dengan spasi), bukan "fullName"
// - Kasus yang WAJIB bracket notation:
//   1. Key mengandung spasi/karakter spesial: obj["full name"]
//   2. Key disimpan di variabel (access dinamis): obj[keyVar]
//   3. Key berupa angka
//
// Contoh yang benar:
// const person = { "full name": "Andi Saputra" };
// console.log(person["full name"]); // dot notation gagal di sini
//
// answer:

/* OLD ANSWER

const person = {
  fullName: "",
};

person["fullName"] = "Andi Saputra";

console.log(person["fullName"]);

*/

// FIXED
// Situasi yang WAJIB pakai bracket notation (dot notation tidak bisa):
// 1. Saat key mengandung spasi/karakter spesial, misal "full name"
//    → obj["full name"] ✅   tapi obj.full name ❌ (syntax error)
// 2. Saat key disimpan di dalam sebuah variabel (dynamic access)
//    → const key = "email"; obj[key] ✅   tapi obj.key ❌ (nyari property "key")
// 3. Saat key berupa angka → obj[0]

const person = {
  "full name": "Andi Saputra",
};

console.log(person["full name"]);

// PROBLEM 3 - Adding, updating, deleting
// Given the starting object below, WITHOUT rewriting it:
//   1. Add a new property `city` with the value "Jakarta"
//   2. Update `price` to 85000
//   3. Delete the `category` property
//   4. Console.log the final object
//
// const product = {
//   name: "Keyboard",
//   price: 50000,
//   category: "electronics",
// };
//
// Expected output:
// { name: 'Keyboard', price: 85000, city: 'Jakarta' }
//
// answer:

const product = {
  name: "Keyboard",
  price: 50000,
  category: "electronics",
};

// const productAltered = Object.assign({}, product);
const productAltered = { ...product };

// Step-1 Add a new property `city` with the value "Jakarta"
productAltered.city = "Jakarta";

// Step-2 Update `price` to 85000
productAltered.price = 85000;

// Step-3 Delete the `category` property
delete productAltered.category;

console.log(productAltered);

// PROBLEM 4 - Object with a method
// Create an object `dog` with:
//   - a property `name` (any name you like)
//   - a method `bark` that prints "<name> says Woof!"
//     (use `this` to access `name`)
// Call `dog.bark()`.
//
// Example output: Rex says Woof!
//
// EVALUASI: 8/10
// - Works, tapi `name: this.name` aneh/tidak perlu
//   (di situ `this` = undefined, bukan object dog)
// - Cukup langsung: name: "Rex"
//
// answer:

/* OLD ANSWER
const dog = {
  name: this.name,
  bark: function () {
    console.log(`${this.name} says Woof!`);
  },
};

dog.name = "Rex";
dog.bark();
*/

const dog = {
  name: "Rex",
  bark: function () {
    console.log(`${this.name} says Woof!`);
  },
};

dog.bark();

// PROBLEM 5 - Object containing an array
// Create an object `student` with:
//   - `name`: "Budi"
//   - `hobbies`: an array with 3 strings
//   - a method `showHobbies` that prints each hobby one by
//     one (loop inside the method, access `hobbies` via `this`)
// Call `student.showHobbies()`.
//
// Example output:
// Budi likes reading
// Budi likes coding
// Budi likes gaming
//
// answer:

const student = {
  name: "Budi",
  hobbies: ["reading", "coding", "gaming"],
  showHobbies: function () {
    for (const hobby of this.hobbies) {
      console.log(`${this.name} likes ${hobby}`);
    }
  },
};

student.showHobbies();

// PROBLEM 6 - Looping over an object
// Create an object `settings` with 3 key-value pairs, for
// example: volume: 80, brightness: 50, notifications: true.
// Loop over the object using for...in and print each line as
// "<value> is stored in key <key>".
//
// Expected output:
// 80 is stored in key volume
// 50 is stored in key brightness
// true is stored in key notifications
//
// answer:

const settings = {
  volume: 80,
  brightness: 50,
  notifications: true,
};

for (const key in settings) {
  console.log(`${settings[key]} is stored in key ${key}`);
}

// PROBLEM 7 - Array of objects (reusable + callback style)
// Given the array below:
//
// const menu = [
//   { name: "Nasi Goreng", price: 25000 },
//   { name: "Es Teh", price: 8000 },
//   { name: "Ayam Bakar", price: 35000 },
// ];
//
// 1. Create a function `findCheapest` that takes the array
//    and RETURNS the name of the cheapest item
//    (use a loop with a variable to track the current lowest
//    price, start by assuming the first item is the cheapest).
// 2. Create a function `printMenu` that takes the array and
//    prints "<name> - <price>" for each item.
// 3. Call both functions.
//
// Expected output:
// Nasi Goreng - 25000
// Es Teh - 8000
// Ayam Bakar - 35000
// Es Teh
//
// EVALUASI: 9/10
// - `findCheapest` disuruh RETURN nama, bukan console.log langsung
//   (biar reusable / bisa diteruskan ke fungsi lain)
//
// answer:

/* OLD ANSWER

function printMenu(menu) {
  for (const item of menu) {
    console.log(`${item.name} - ${item.price}`);
  }
}

function findCheapest(menu) {
  let cheapestItem = menu[0];

  for (let i = 1; i < menu.length; i++) {
    if (cheapestItem.price > menu[i].price) cheapestItem = menu[i];
  }

  console.log(cheapestItem.name);
}

const menu = [
  { name: "Nasi Goreng", price: 25000 },
  { name: "Es Teh", price: 8000 },
  { name: "Ayam Bakar", price: 35000 },
];

printMenu(menu);
findCheapest(menu);

*/

// FIXED

function printMenu(menu) {
  for (const item of menu) {
    console.log(`${item.name} - ${item.price}`);
  }
}

function findCheapest(menu) {
  let cheapestItem = menu[0];

  for (let i = 1; i < menu.length; i++) {
    if (cheapestItem.price > menu[i].price) cheapestItem = menu[i];
  }

  return cheapestItem.name;
}

const menu = [
  { name: "Nasi Goreng", price: 25000 },
  { name: "Es Teh", price: 8000 },
  { name: "Ayam Bakar", price: 35000 },
];

printMenu(menu);

const cheapestItem = findCheapest(menu);
console.log(cheapestItem);

// PROBLEM 8 - Nested object (challenge)
// Create an object `company` with:
//   - `name`: "TechCorp"
//   - `address`: a nested object with `street` and `city`
//   - `employees`: an array of objects, each with `name`
//     and `role` (2 employees is enough)
// 1. Console.log the street WITHOUT creating an intermediate
//    variable (one chained line: company... street)
// 2. Create a method `promo` on `company` that prints
//    "<company name> is hiring! Check our <city> office."
//    (use `this`)
// 3. Loop over `company.employees` and print
//    "<name> (<role>)"
//
// Expected output:
// Jl. Sudirman No. 1
// TechCorp is hiring! Check our Jakarta office.
// Andi (Developer)
// Budi (Designer)
//
// answer:

const company = {
  name: "TechCorp",
  address: {
    street: "Jl. Sudirman No. 1",
    city: "Jakarta",
  },
  employees: [
    { name: "Andi", role: "Developer" },
    { name: "Budi", role: "Designer" },
  ],
  promo: function () {
    console.log(
      `${this.name} is hiring! Check our ${this.address.city} office.`,
    );
  },
};

console.log(company.address.street);

company.promo();

for (const employee of company.employees) {
  console.log(`${employee.name} (${employee.role})`);
}
