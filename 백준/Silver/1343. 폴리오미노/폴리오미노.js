const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input[0];

N = N.replace(/XXXX/g, 'AAAA');
N = N.replace(/XX/g, 'BB');

console.log(N.includes('X') ? -1 : N);