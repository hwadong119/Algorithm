const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...numbers] = input.map((v) => BigInt(v));
numbers.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

let count = 1;
let maxValue = numbers[0];
let maxCount = 0;

for (let i = 0; i < N; i++){
  next = numbers[i + 1];
  if (numbers[i] === next) {
    count++;
  } else {
    count = 1;
  }

  if (count > maxCount) {
    maxCount = count;
    maxValue = numbers[i];
  }
};

console.log(String(maxValue));