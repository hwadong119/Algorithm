const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let str = String(input);
let numbers = [0,0,0,0,0,0,0,0,0]
let count = 0

for (i of str) {
  if (i === '9' || i === '6') {
    count += 1
    if (count % 2 !== 0) numbers[6] += 1
  } else {
    numbers[i] += 1
  }
}

const maxValue = Math.max.apply(null, numbers)

console.log(maxValue);