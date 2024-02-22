const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [str, N, ...arr] = input;

let cnt = 0;
for (let i = 0; i < N; i++) {
  if ((arr[i] + arr[i]).includes(str)) {
    cnt++;
  };
};

console.log(cnt);