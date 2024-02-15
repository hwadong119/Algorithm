const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
const result = [...new Set(input)].sort((a, b) => b-a)

console.log(result.join("\n"));