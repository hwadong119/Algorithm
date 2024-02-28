const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = [];
for (let i = 2; i <= N; i++) arr.push(i);
let count = 0;
let prime;
let nth;

while (count < K) {
  prime = arr[0];
  arr.some(v => {
    if (v % prime === 0) {
      arr.splice(arr.indexOf(v), 1);
      nth = v;
      count++;
    }
    if (count === K) return true;
  });
}

console.log(nth);