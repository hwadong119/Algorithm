const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let answer = 0;
let num = 1;
let d = 10;
let s = 1;

while (num <= N) {
  if (Math.floor(num/d) == 0) {
    num++;
    answer +=s;
  } else {
    d *= 10;
    s++;
  }
}

console.log(answer);

