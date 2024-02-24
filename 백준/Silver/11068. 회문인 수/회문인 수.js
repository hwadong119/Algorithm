const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());
const arr = input.map(Number);

function isPalindrome(n, radix) {
  const convert = [];
  while(n !== 0) {
    convert.push(n % radix);
    n = Math.floor(n / radix);
  }

  for (let i = 0; i < Math.floor(convert.length / 2); i++) {
    if (convert[i] !== convert[convert.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const sb = [];

for (let i = 0; i < T; i++) {
  let chk = false;

  for (let r = 2; r <= 64 && !chk; r++) {
    chk = isPalindrome(arr[i], r);
  }
  sb.push(chk ? 1 : 0);
}

console.log(sb.join("\n"));