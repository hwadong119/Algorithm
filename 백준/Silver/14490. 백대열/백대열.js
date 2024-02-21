const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [num1, num2] = input[0].split(":").map(Number);

let getGCD = (num1, num2) => {
  while (num2 > 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  };
  return num1;
};

let gcd = getGCD(num1, num2);

console.log(`${num1/gcd}:${num2/gcd}`);
