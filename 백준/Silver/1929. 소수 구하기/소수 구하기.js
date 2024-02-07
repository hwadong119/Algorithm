const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

const prime = { 1: true };

for (let i = 2; i <= Math.sqrt(M); i++) {
  if (prime[i]) continue;
  for (let j = i ** 2; j <= M; j+= i) {
    prime[j] = true;
  }
}

const results = [];

for (let i = N; i <=  M; i++) {
  if (!prime[i]) results.push(i);
}

console.log(results.join("\n"));