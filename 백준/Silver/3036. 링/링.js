const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let first = arr.shift();

arr.forEach(v => {
  const gcd = GCD(first, v);
  console.log(`${first/gcd}/${v/gcd}`);
})

function GCD(a, b) {
  if (a % b === 0) return b;
  return GCD(b, a % b);
}