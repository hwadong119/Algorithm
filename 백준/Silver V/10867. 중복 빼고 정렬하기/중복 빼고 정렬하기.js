const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
const arr = input[0].split(" ").map(Number);

const ans = [...new Set(arr)].sort((a, b) => a-b)

console.log(ans.join(" "))