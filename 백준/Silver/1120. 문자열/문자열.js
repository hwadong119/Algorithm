const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input[0].split(" ");
let min = a.length;

for (let i = 0; i <= b.length - a.length; i++) {
  let curMin = 0;
  for (let j = i; j < i+a.length; j++) {
    if (a[j-i] !== b[j]) curMin++;
  }
  if (curMin < min) min = curMin;
}

console.log(min);