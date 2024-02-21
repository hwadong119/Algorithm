const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0];
const ucpc = "UCPC";

let cnt = 0;
for (const x of str) {
  if (ucpc[cnt] === x && cnt < 4) cnt++;
  if (cnt > 3) break;
}

console.log(cnt === 4 ? "I love UCPC" : "I hate UCPC");