const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
const t = input.shift().split(" ").map(Number);

t.sort((a, b) => b-a);

let answer = 0;
for (let i = 0; i < n; i++) {
  answer = Math.max(answer, t[i] + i + 1);
};

answer += 1;

console.log(answer)