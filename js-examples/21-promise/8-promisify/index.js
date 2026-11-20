// EXAMPLE-1: CREATE FUNCTION BASED PROMISE

/*

const fs = require("node:fs");
const path = require("node:path");

const filepath = path.join(__dirname, "data.txt");

function readFile(filename, encoding) {
  return new Promise((resolve, rejects) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) {
        rejects(err);
      } else {
        resolve(data);
      }
    });
  });
}

const promise = readFile(filepath, "utf-8");

promise.then((data) => {
  console.log(data);
});

*/

// EXAMPLE-2: CREATE FUNCTION BASED PROMISED WITH SHORTCUT USING '.promisify'

const fs = require("node:fs");
const util = require("node:util");
const path = require("node:path");

const filepath = path.join(__dirname, "data.txt");

const readFile = util.promisify(fs.readFile);

const promise = readFile(filepath, "utf-8");

promise.then((data) => {
  console.log(data);
});
