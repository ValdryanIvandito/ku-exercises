/* 
    Notes:
    - Object just have 2 property key data type, string and symbol
    - Map can have many property key data type
    - Map more efficient and good performance than object
    - Objects are used more often than maps and have become the standard.
    - Use maps when data is more dynamic or frequently altered for more efficient performance.
*/

// INITIALIZE A NEW MAP
const customerWallet = new Map(); // Create a new empty Map instance

// ADD ENTRIES
customerWallet.set("username", "John"); // Key: string, value: string
customerWallet.set("balance", 1000); // Key: string, value: number
customerWallet.set(1, "United State"); // Key: number, value: string
customerWallet.set(true, "active"); // Key: boolean, value: string
console.log(customerWallet, "\n"); // Log the Map itself; a Map is iterable

// GET VALUES BY KEY
const username = customerWallet.get("username");
const balance = customerWallet.get("balance");
const isActive = customerWallet.get(true);
console.log(`
    Customer Wallet: 
      Name: ${username}
      Balance: ${balance}
      Status: ${isActive}
      \n
`);

// CHECK IF A KEY EXISTS
const isUSCitizen = customerWallet.has(1);
const isIDCitizen = customerWallet.has(62);
if (isUSCitizen) console.log("Customer is United State citizen");
if (!isIDCitizen) console.log("Customer is not Indonesia citizen");

// GET ENTRY COUNT
const entryCount = customerWallet.size;
console.log("Customer Wallet Entry Count: ", entryCount, "\n");

// DELETE ENTRY BY KEY
customerWallet.delete(true);
console.log(customerWallet, "\n"); // "active" entry is gone

// REMOVE ALL ENTRIES
customerWallet.clear();
console.log(customerWallet, "\n"); // Log the emptied Map: Map(0) {}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// USING AN OBJECT AS A KEY
const user1 = { id: 1, name: "John Doe" };
const user2 = { id: 2, name: "Maria Janne" };

const visitCount = new Map();

visitCount.set(user1, 5);
visitCount.set(user2, 7);

console.log("Visit Count User1: ", visitCount.get(user1));
console.log("Visit Count User2", visitCount.get(user2));

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// MAP ITERATION METHODS
const fruitPrices = new Map(); // Map preserves insertion order, so iteration follows it
fruitPrices.set("apple", 5);
fruitPrices.set("orange", 3);
fruitPrices.set("banana", 2);

// GET ALL KEYS
const fruits = fruitPrices.keys(); // Get an iterator over all keys
console.log(fruits); // Output: [Map Iterator] { 'apple', 'orange', 'banana' }

// GET ALL VALUES
const prices = fruitPrices.values(); // Get an iterator over all values
console.log(prices); // Output: [Map Iterator] { 5, 3, 2 }

// GET ALL ENTRIES
const entries = fruitPrices.entries(); // Get an iterator over all [key, value] pairs
console.log(entries); // Output: [Map Entries] { [ 'apple', 5 ], [ 'orange', 3 ], [ 'banana', 2 ] }

// ITERATE OVER ENTRIES
for (const entry of entries) {
  const fruit = entry[0];
  const price = entry[1];

  console.log(`${fruit} is ${price}$`); // Output: "apple is 5$", "orange is 3$", "banana is 2$" (one per line)
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// A MAP ITERATOR IS NOT AN ARRAY
console.log(Array.isArray(fruitPrices.entries())); // Output: false

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// BENCHMARK PERFORMANCE: OBJECT VS MAP
// To keep the comparison fair, both use the same numeric keys,
// and the read loops accumulate a value to prevent dead-code elimination.

import os from "node:os";

function printEnvironmentInfo() {
  const cpus = os.cpus();

  console.log("Environment Info:");
  console.log(`  OS        : ${os.type()} ${os.release()} (${os.platform()})`);
  console.log(`  CPU       : ${cpus[0].model.trim()}`);
  console.log(`  CPU Cores : ${cpus.length}`);
  console.log(`  Memory    : ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`);
  console.log(`  Node.js   : ${process.version}`);
  console.log("\n");
}

printEnvironmentInfo();

function writeObjectRepeatedly(obj, count) {
  console.time("Object Write");

  for (let i = 0; i < count; i++) {
    obj[i] = i;
  }

  console.timeEnd("Object Write");
}

function readObjectRepeatedly(obj, count) {
  console.time("Object Read");

  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += obj[i];
  }

  console.timeEnd("Object Read");
  return sum;
}

function objectPerformanceTest(count) {
  const obj = {};

  console.log("Object Performance Test Result: ");
  writeObjectRepeatedly(obj, count);
  readObjectRepeatedly(obj, count);
  console.log("\n");
}

function writeMapRepeatedly(map, count) {
  console.time("Map Write");

  for (let i = 0; i < count; i++) {
    map.set(i, i);
  }

  console.timeEnd("Map Write");
}

function readMapRepeatedly(map, count) {
  console.time("Map Read");

  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += map.get(i);
  }

  console.timeEnd("Map Read");
  return sum;
}

function mapPerformanceTest(count) {
  const map = new Map();

  console.log("Map Performance Test Result: ");
  writeMapRepeatedly(map, count);
  readMapRepeatedly(map, count);
  console.log("\n");
}

const count = 1e6;
objectPerformanceTest(count);
mapPerformanceTest(count);
