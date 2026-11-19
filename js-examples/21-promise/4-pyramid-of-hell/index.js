const fs = require("node:fs");
const path = require("node:path");

console.log("Program start...\n");

const filePath1 = path.join(__dirname, "data-1.txt");
const filePath2 = path.join(__dirname, "data-2.txt");
const filePath3 = path.join(__dirname, "data-3.txt");

fs.readFile(filePath1, "utf-8", (err, data) => {
  if (err) {
    console.error("Failed to load data-1:", err.message);
    return;
  }

  console.log(data);

  fs.readFile(filePath2, "utf-8", (err, data) => {
    if (err) {
      console.error("Failed to load data-2:", err.message);
      return;
    }

    console.log(data);

    fs.readFile(filePath3, "utf-8", (err, data) => {
      if (err) {
        console.error("Failed to load data-3:", err.message);
        return;
      }

      console.log(data);
    });
  });
});

console.log("Program end...\n");
