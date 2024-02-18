const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const a = [];
const b = [];

a[0] = 0;
a[1] = 1;

b[0] = 1;
b[1] = 1;

for(let i=2; i < n+1; i++) {
  a[i] = b[i-1];
  b[i] = a[i-1] + b[i-1];
}

console.log(a[n-1] + " " + b[n-1])