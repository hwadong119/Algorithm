const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input.shift().split(" ").map(Number);
const N = Number(input.shift());
const arr = input.map(Number);

let result = 0;
let S = Math.abs(B - A);

for (let i = 0; i < N; i++) {
  const T = Math.abs(B - arr[i]);

  if (T < S) {
    result = 1;
    S = T;
  }
}

result += S;

console.log(result);