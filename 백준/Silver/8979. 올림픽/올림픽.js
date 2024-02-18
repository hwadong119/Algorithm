const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

let country = [];
let rank = 1;
for (let i = 0; i < N; i++) {
  let temp = input.shift().split(" ").map(Number);
  country.push(temp);
}

country.sort((a, b) => a[0] - b[0]);

rank += country.filter(
  (v) =>
    v[1] > country[K - 1][1] ||
    (v[1] === country[K - 1][1] && v[2] > country[K - 1][2]) ||
    (v[1] === country[K - 1][1] && v[2] === country[K - 1][2] && v[3] > country[K - 1][3])
).length;

console.log(rank);
