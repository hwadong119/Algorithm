const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const arr1 = input.shift().split(" ").map(Number);
const arr2 = input.shift().split(" ").map(Number);

arr1.sort((a, b) => a-b);
arr2.sort((a, b) => b-a);

const result = arr1.reduce((acc, curr, index) => {
  return acc + curr * arr2[index];
}, 0);

console.log(result);