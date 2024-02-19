const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());

let a = BigInt(0);
let b = BigInt(1);
let temp = BigInt(0);

for (let i = 0; i < n; i++) {
  temp = a;
  a = b;
  b = temp + a;
}

console.log((2n * (a + b)).toString());