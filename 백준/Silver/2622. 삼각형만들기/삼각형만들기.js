const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

let ans = 0;

for (let v1 = 1; v1 < N; v1++) {
  for (let v2 = v1; v2 < N; v2++) {
    const v3 = N - v1 - v2;

    if (v2 > v3) break;
    if (v1 + v2 > v3) ans++;
  }
}

console.log(ans);