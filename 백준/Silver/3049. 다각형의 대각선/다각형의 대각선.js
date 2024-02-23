const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const result = (N * (N-1) * (N-2) * (N-3)) /24;
console.log(result);