const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

let ans = 0;

let start = 1;
let end = 1;
let sum = 1;

while (start <= end) {
  if (sum === n) ans++;
  if (sum < n) {
    end++;
    sum += end;
  } else if (sum >= input) {
    sum -= start;
    start++;
  }
}

console.log(ans);