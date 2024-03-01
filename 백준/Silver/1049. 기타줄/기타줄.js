const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
const list = input.map(v => v.split(" ").map(Number));

let result = 0;

const minSet = Math.min(...list.map(item => item[0]));
const minPiece = Math.min(...list.map(item => item[1]));

while (true) {
  let set = Math.floor(N / 6);
  if (N < 6) {
    result += Math.min(minPiece * N, minSet);
    break;
  } else {
    result += Math.min(minSet * set, minPiece * (set * 6));
    N -= 6 * set;
  }
}

console.log(result);