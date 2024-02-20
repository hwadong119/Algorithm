const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const X = input[0];
let cnt = 0;

function recur(str) {
  if (str < 10) return str;
  str = String(str).split("").reduce((acc, cur) => Number(acc) + Number(cur), 0);
  cnt++;
  return recur(str);
}

recur(X);

const answer = [cnt, recur(X) % 3 === 0 ? "YES" : "NO"]

console.log(answer.join("\n"));