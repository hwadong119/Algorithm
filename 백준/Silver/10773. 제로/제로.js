const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const stack = [];

for (let i = 0; i < N; i++) {
  const value = Number(input[i]);

  if (value === 0) stack.pop();
  else stack.push(value);
}

let answer = 0;

for (let i = 0; i < stack.length; i++) {
  answer += stack[i];
}


console.log(answer);