const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [[N, M], A, B] = input.map(v => v.split(" ").map(Number))
const ans = [];

let aIndex = 0, bIndex = 0;

while (aIndex < N || bIndex < M) {
  if (aIndex < N && bIndex < M) {
    if (A[aIndex] > B[bIndex]) {
      ans.push(B[bIndex]);
      bIndex++;
    } else {
      ans.push(A[aIndex]);
      aIndex++;
    }
  } else {
    if (aIndex < N) {
      ans.push(...A.slice(aIndex));
      aIndex = N;
    } else {
      ans.push(...B.slice(bIndex));
      bIndex = M;
    }
  }
}

console.log(ans.join(" "))