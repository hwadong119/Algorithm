const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));

let score = [];
let max = 0;
let num = 0;

for (let i = 0; i < N; i++) {
  score.push(0);
  for (let j = 0; j < 5; j++) {
    for (let k = j + 1; k < 5; k++) {
      for (let l = k + 1; l < 5; l++) {
        const currentSum = (arr[i][j] + arr[i][k] + arr[i][l]) % 10;
        score[i] = Math.max(score[i], currentSum);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  if (max < score[i]) {
    max = score[i];
    num = i;
  } 
  if (max === score[i] && i > num) {
    num = i;
  }
}

console.log(num + 1);
