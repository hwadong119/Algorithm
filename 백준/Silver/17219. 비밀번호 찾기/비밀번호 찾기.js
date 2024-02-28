const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const pwMap = new Map();
let answer = "";

for (let i = 0; i < N; i++) {
  const [site, pw] = input[i].split(" ");
  pwMap.set(site, pw);
}

for (let i = N; i < N + M; i++) {
  answer += pwMap.get(input[i]) + "\n";  
}

console.log(answer);