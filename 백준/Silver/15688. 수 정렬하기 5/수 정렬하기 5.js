const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const nums = input.map(Number);

nums.sort((a, b) => a-b);

console.log(nums.join("\n"));