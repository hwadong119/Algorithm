const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B, N] = input.shift().split(" ").map(Number);

let answer = A % B;

for (let i = 0; i < N-1; i++) {
  answer *= 10;
  answer %= B;
}

answer *= 10;

console.log(Math.floor(answer/B))