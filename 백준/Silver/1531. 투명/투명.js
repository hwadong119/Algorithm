const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(v => v.split(" ").map(Number));
const picture = new Array(101).fill(null).map(() => new Array(101).fill(0));

for (let i = 0; i < N; i++) {
  const [x1, y1, x2, y2] = arr[i];

  for (let j = x1; j <= x2; j++) {
    for (let k = y1; k <= y2; k++) {
      picture[j][k] += 1;
    }
  }
}

let result = 0;

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    if (picture[i][j] > M) {
      result++;
    }
  }
}

console.log(result);