const fs = require("node:fs");
const path = require("node:path");

console.log("Program start...\n");

const filePath = path.join(__dirname, "data.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Failed to load file:", err.message);
    return;
  }
  console.log(data);
});

console.log("Program end...\n");