const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let ans = 0;



while (N > 0) {
  if(N === 1 || N === 3) {
    ans = -1;
    break;
  };
  if (N % 2 === 1 || N % 5 === 0) {
    ans += 1;
    N -= 5;
  } else if (N % 2 ===  0) {
    ans += 1;
    N -= 2;
  }
}

console.log(ans);