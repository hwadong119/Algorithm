const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input.shift().split(" ").map(Number);
const M = Number(input.shift())
const nums = input[0].split(" ").reverse();
const ans = [];

let DEC = 0;

for (let i = 0; i < M; i++) {
  DEC += nums[i] * (A ** i)
}

if (DEC === 0) console.log(0)
else {
  while (DEC > 0) {
    ans.unshift(DEC%B);
    DEC = Math.floor(DEC / B);
  }
  console.log(ans.join(" "))
}