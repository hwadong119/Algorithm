const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let curr = Number(0);
let ans = Number(1);

if (N === 0) {
  console.log(0);
} else {
  const arr = input.shift().split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    const weight = arr[i];

    if (weight + curr > M) {
      curr = weight;
      ans += 1;
    } else {
      curr += weight;
    }
  }
  console.log(ans);
}

