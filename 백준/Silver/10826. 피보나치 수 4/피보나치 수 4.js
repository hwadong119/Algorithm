const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let fibo = [BigInt(0), BigInt(1)];
    for (let i = 2; i <= n; i++) {
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo[n].toString();
  }
}

console.log(fibonacci(n));
