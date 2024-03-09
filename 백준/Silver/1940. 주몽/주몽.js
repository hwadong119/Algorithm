const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const nums = input[2].split(" ").map(Number).sort((a, b) => a-b);

let answer = 0; 
let lt = 0;
let rt = N - 1;

while(lt < rt) {
  let result = nums[lt] + nums[rt];
  answer += result === M ? 1 : 0;
  lt += result <= M ? 1 : 0;
  rt -= result >= M ? 1 : 0;
}

console.log(answer);