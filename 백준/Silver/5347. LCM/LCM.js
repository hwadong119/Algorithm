const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.map(v => v.split(" ").map(Number))

for (let i = 0; i < N; i++) {
  let A = arr[i][0];
  let B = arr[i][1];
  console.log((A * B/gcd(A, B)));
}

function gcd(a, b) {
  let mod;
  while((mod = a % b) > 0) {
    a = b;
    b = mod;
    mod = a % b;
  };
  return b;
}