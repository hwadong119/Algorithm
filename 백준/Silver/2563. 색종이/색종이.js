const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.shift();
const arr = [];

for (let z = 0; z < T; z++) {
  arr[z] = input[z].split(' ');
}

const row = 100;
const col = 100;
let count = 0;
const whiteArr = Array.from(new Array(col), () => new Array(row).fill(0));

for (let i = 0; i < T; i++) {
  const a = Number(arr[i][0]);
  const b = Number(arr[i][1]);
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      if (whiteArr[a+k][b+j] === 1) {
        continue;
      }
      whiteArr[a+k][b+j] = 1;
      count++;
    }
  }
}

console.log(count);