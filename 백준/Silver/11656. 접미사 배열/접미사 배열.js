const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift().split("");
const suffix = [];

for (let i = 0; i < N.length; i++) {
  suffix.push(N.slice(i).join(""));
}

suffix.sort();

console.log(suffix.join("\n"));