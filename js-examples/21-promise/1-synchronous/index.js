const fs = require("node:fs");
const path = require("node:path");

console.log("Program start...\n");

const data = fs.readFileSync('data.txt', "utf-8");

console.log(data);

console.log("\nProgram end...");
