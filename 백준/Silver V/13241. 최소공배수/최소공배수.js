const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input[0].split(" ");

const ans = (A * B) / gcd(A, B);

function gcd(A, B) {
  while (B != 0) {
    [A, B] = [B, A % B];
  }
  return A;
}

console.log(ans);