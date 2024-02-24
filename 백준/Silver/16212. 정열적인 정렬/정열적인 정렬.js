const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);

arr.sort((a, b) => a-b);

console.log(arr.join(" "))