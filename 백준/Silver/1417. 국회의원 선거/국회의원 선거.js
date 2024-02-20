const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
let dasom = Number(input.shift());
let candidates = input.map(Number);

candidates.sort((a, b) => b-a);

let cnt = 0;

while (candidates[0] >= dasom) {
  dasom++;
  candidates[0]--;
  cnt++;
  candidates.sort((a, b) => b-a);
}

console.log(cnt);
