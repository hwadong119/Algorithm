const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...arr] = input[0].split(" ").map(Number);
let [kim, im] = [...arr];
let result = 0;

while (kim !== im) {
  kim = parseInt(kim / 2 + kim % 2);
  im = parseInt(im / 2 + im % 2);
  result++;
}

console.log(result);