const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0
for (let i = 1; i <= input; i++) {
  if (i % 5 === 0) answer++
  if (i % 25 === 0) answer++
  if (i % 125 === 0) answer ++ 
}

console.log(answer);