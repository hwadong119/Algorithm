const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());

let row = 0, column = 0;

for (let i = 0; i < n; i++) {
  row += input[i].split("X").filter(v => v.includes("..")).length;

  let columnCount = 0;
  for (let j = 0; j < n; j++) {
    if (input[j][i] === ".") columnCount ++;
    if (input[j][i] === "X" || j === n - 1) {
      if (columnCount >= 2) column++;
      columnCount = 0;
    }
  }
}

console.log(row + " " + column)
