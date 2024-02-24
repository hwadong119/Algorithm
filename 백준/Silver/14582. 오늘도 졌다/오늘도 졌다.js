const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const w = input.shift().split(" ").map(Number);
const s = input.shift().split(" ").map(Number);

let isWWinBefore = 0;
let wScore = 0;
let sScore = 0;

for (let i = 0; i < 9; i++) {
  wScore += w[i];
  if (wScore > sScore) isWWinBefore = 1;
  sScore += s[i];
}

if (wScore < sScore && isWWinBefore === 1) {
  console.log("Yes");
} else {
  console.log("No");
}
