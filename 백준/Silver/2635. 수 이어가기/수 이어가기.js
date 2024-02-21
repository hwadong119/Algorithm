const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
let max = 0;
let maxArr = new Array();
let prevA, prevB;

for (let i = 1; i <= N; i++) {
  const arr = new Array();
  arr.push(N);
  arr.push(i);
  prevA = N;
  prevB = i;

  while (true) {
    let temp = prevA - prevB;

    if (temp >= 0) arr.push(temp);
    else break;

    prevA = prevB;
    prevB = temp;
  };

  if (max < arr.length) {
    max = arr.length;
    maxArr = arr;
  };
};

console.log(max);
console.log(maxArr.toString().replace(/,/g, " "));
