const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
const arr = N.split("");

if (!arr.includes("0")) console.log(-1);
else {
  const sum = arr.reduce((acc, curr) => acc + Number(curr), 0);
  if (sum % 3 === 0) {
    console.log(arr.sort((a, b) => b-a).join(""));
  } else {
    console.log(-1)
  }
}