const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
const J = Number(input.shift());

let move = 0;

let start = 1;
let end = M;

for (let i = 0; i < J; i++) {
  if (Number(input[i]) < start || Number(input[i]) > end) {
    if (Number(input[i]) < start) {
      move += start - Number(input[i]);
      end -= start - Number(input[i]);
      start = Number(input[i]);
    } else if (Number(input[i]) > end) {
      move += Number(input[i]) - end;
      start += Number(input[i]) - end;
      end = Number(input[i])
    }
  }
}

console.log(move)