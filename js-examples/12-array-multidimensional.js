
// Initialization (Creating a 2D Array)
const matrix = [
  [1, 2, 3], // Row 0
  [4, 5, 6], // Row 1
  [7, 8, 9], // Row 2
];

console.log("Initial 2D Matrix: ", matrix);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Accessing Elements
const firstRowSecondCol = matrix[0][1]; // Row 0, Column 1 -> 2
const centerElement = matrix[1][1]; // Row 1, Column 1 -> 5
const lastElement = matrix[2][2]; // Row 2, Column 2 -> 9

console.log("Accessing Elements:");
console.log("Row 0, Col 1 :", firstRowSecondCol);
console.log("Row 1, Col 1 :", centerElement);
console.log("Row 2, Col 2 :", lastElement);

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Modifying Element
matrix[0][0] = 99; // Change value at Row 0, Column 0 from 1 to 99
console.log("Matrix after modification at [0][0]:");
console.log(matrix[0]); // Output: [99, 2, 3]

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Iterating through a 2D Array using nested for loop
console.log("Iterating using nested loops:");
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`Element at [${row}][${col}]: ${matrix[row][col]}`);
  }
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// Iterating through a 2D Array using nested forEach
console.log("Iterating using forEach:");
matrix.forEach((row, rowIndex) => {
  row.forEach((value, colIndex) => {
    console.log(`Value at [${rowIndex}][${colIndex}]: ${value}`);
  });
});
