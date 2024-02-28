const getGCD = (a, b) => {
  if (a % b === 0) return b;
  return getGCD(b, a % b);
};

const getSum = (n, ...arr) => {
  let sum = 0;
  arr.sort((a, b) => b - a);
  arr.forEach((v, i) => {
    while(i < n-1) {
      sum += getGCD(v, arr[++i]);
    }
  });
  return sum;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());
const output = [];

input.forEach(v => {
  output.push(getSum(...v.split(" ").map(Number)))
})

console.log(output.join("\n"));

