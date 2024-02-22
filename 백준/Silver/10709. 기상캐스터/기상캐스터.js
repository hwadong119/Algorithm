const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [H, W] = input.shift().split(" ");
const points = input.map(v => v.split(""));

let result = [...points];
for (let i = 0; i < H; i++) {
  let cnt = -1;
  for (let j = 0; j < W; j++) {
    if (points[i][j] === "c") cnt = 0;
    result[i][j] = cnt;
    cnt === -1 ? "" : cnt++;
  }
}

console.log(result.join("\n").replace(/,/g, " "));