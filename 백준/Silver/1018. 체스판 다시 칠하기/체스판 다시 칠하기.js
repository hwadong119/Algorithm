const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(v => v.split(""));

const answer = [];
const line = ["WBWBWBWB","BWBWBWBW"];

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    for (let z = 0; z < 2; z++) {
      let count = 0;

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const current = arr[i+x][j+y];
          if (current !== line[(x+z) % 2][y]) count++;
        }
      }
      answer.push(count);
    }
  }
}

console.log(Math.min(...answer));