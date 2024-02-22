const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...arr] = input.map(v => v.split(" ").map(Number));

arr.sort((a, b) => b[2] - a[2]);

let cnt = Array.from({ length: N }, () => 0)
let result = 0;
let i = 0;

while (result < 3) {
  if (cnt[arr[i][0]] < 2) {
    cnt[arr[i][0]] += 1;
    console.log(arr[i][0], arr[i][1]);
    result++;
  }
  i++;
}
