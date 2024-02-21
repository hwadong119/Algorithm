const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);

const pascalTriangle = (n, k) => {
  if (k === 1) return 1;
  else if (n === k) return 1;
  else {
    return pascalTriangle(n-1, k) + pascalTriangle(n-1, k-1);
  }
}

console.log(pascalTriangle(n, k));