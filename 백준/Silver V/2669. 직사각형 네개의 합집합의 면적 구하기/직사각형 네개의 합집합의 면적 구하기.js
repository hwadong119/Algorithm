const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const map = Array.from({ length: 101 }, () => Array(101).fill(false));

let cnt = 0;

for (let i = 0; i < 4; i++) {
  const coords = input.shift().split(" ").map(Number);
  const x1 = coords[0];
  const y1 = coords[1];
  const x2 = coords[2];
  const y2 = coords[3];

  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      if (map[y][x] === false) {
        map[y][x] = true;
        cnt++;
      }
    }
  }
}

console.log(cnt);