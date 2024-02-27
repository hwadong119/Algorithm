const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const queue = [];
const answer = [];
for (let i = 0; i < N; i++) queue.push(i+1);
let count = 1;
while(queue.length) {
  const shiftItem = queue.shift();
  if (count % K === 0) answer.push(shiftItem);
  else queue.push(shiftItem);
  count++;
}

console.log(`<${answer.join(", ")}>`);