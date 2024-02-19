const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, L] = input.shift().split(" ").map(Number);
let arr = input[0].split(" ").sort((a, b) => a-b);

for(let i = 0; i < N; i++) {
  if (arr[i] <= L) {
    L++;
  } else {
    break;
  }
}

console.log(L);