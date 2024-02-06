const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let count = 0;
let currentNumber = 0;

while (true) {
  currentNumber++;
  if (!currentNumber.toString().includes('666')) continue;
  count++;
  if (count === N) {
    console.log(currentNumber);
    break;
  }
}