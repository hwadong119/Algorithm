const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const cards = input.shift().split(" ").map(Number)
const M = Number(input.shift());
const nums = input.shift().split(" ").map(Number);

let answer = [];
let haveCardMap = new Map();

for (x of cards) {
  if (haveCardMap.has(x)) haveCardMap.set(x, haveCardMap.get(x) + 1);
  else haveCardMap.set(x, 1);
}

for (x of nums) {
  if (haveCardMap.has(x)) answer.push(haveCardMap.get(x));
  else answer.push(0);
} 

console.log(answer.join(" "));