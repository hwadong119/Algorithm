const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

let binary = N.toString(2);
let answer = parseInt(binary.slice(1), 2) * 2;

if (answer === 0 || !answer) answer = N;

console.log(answer);