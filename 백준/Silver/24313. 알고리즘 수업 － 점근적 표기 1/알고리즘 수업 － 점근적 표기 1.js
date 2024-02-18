const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a1, a0] = input[0].split(" ").map(Number);
const c = +input[1];
const n0 = +input[2];

console.log(+(a0 <= (c-a1) * n0 && c >= a1))