const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const P = Number(input.shift());
const arr = input.map(v => v.split(" ").map(Number));

for (let i = 0; i < P; i++) {
  const no = arr[i].shift();
  let cnt = 0;

  for (let j = 0; j < 20; j++) {
    for (let k = 0; k < j; k++) {
      if (arr[i][k] > arr[i][j]) cnt++;
    }
  }

  console.log(`${no} ${cnt}`);
}