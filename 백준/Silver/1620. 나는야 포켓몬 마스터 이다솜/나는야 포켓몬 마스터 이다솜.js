const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.slice(0, N);
const pMap = new Map(arr.map((v, i) => [v, i+1]));
const question = input.slice(N);
const answer = [];
question.forEach(v => {
  if (Number.isNaN(+v)) answer.push(pMap.get(v));
  else answer.push(input[+v-1]);
})

console.log(answer.join("\n"));
