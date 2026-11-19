const fs = require("node:fs").promises;
const path = require("node:path");

const filePath = path.join(__dirname, "data.txt");


// Handling a Promise by attaching .then() and .catch() separately

/*

// 1. Initial
const promise = fs.readFile(filePath, "utf-8");

// 2. Resolved
promise.then((data) => {
  console.log(data);
});

// 3. Rejected
promise.catch((err) => {
  console.log(err);
});

*/


// Handling a Promise with method chaining in a single flow

fs.readFile(filePath, "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


  