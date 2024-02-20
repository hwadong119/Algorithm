const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const K = Number(input.shift());

for (let i = 0; i < K; i++) {
  let [N, ...score] = input[i].split(" ").map(Number);
  score.sort((a, b) => b-a);
  const max = score[0];
  const min = score[N-1];

  let gap = [];
  for (let j = 0; j < N-1; j++) {
    gap.push(score[j] - score[j+1])
  }
  gap.sort((a, b) => b-a);
  const maxGap = gap[0];

  console.log(`Class ${i+1}`);
  console.log(`Max ${max}, Min ${min}, Largest gap ${maxGap}`);
}