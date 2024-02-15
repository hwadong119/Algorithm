const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map(Number).sort((a, b) => b-a)
const sumArr = arr.slice(0, 5);
const sum = sumArr.reduce((sum, a) => sum + a, 0);

const answer = [];
for (let i = 0; i < sumArr.length; i++) {
  answer.push(input.indexOf(String(sumArr[i])) + 1);
}

console.log(sum + "\n" + answer.map(Number).sort((a,b)=>a-b).join(" "))