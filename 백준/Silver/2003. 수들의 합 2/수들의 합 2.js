const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
let count = 0;

for (let i = 0; i < N; i++) {
  let sum = arr[i];
  let idx = i;
  while(sum < M && idx < N-1) {
    idx++;
    sum += arr[idx];
  }
  if (sum === M) count++;
}

console.log(count);