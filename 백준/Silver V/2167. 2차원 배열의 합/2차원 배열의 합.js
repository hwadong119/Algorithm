const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [[N, M], ...arr] = input.map(v => v.split(" ").map(Number));

const array = arr.slice(0, N);
const question = arr.slice(N+1);
const ans = [];

for (let [i, j, x, y] of question) {
  let s = 0;

  for (let k = i; k <= x; k++) {
    for (let l = j; l <= y; l++) {
      s += array[k-1][l-1];
    }
  }
  ans.push(s);
}

console.log(ans.join("\n"));