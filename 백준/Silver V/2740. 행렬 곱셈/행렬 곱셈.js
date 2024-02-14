const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let size = input.shift().split(" ").map(Number);
const hang1 = input.splice(0, size[0]).map(v=>v.split(" "));
size = input.shift().split(" ").map(Number);
const hang2 = input.splice(0, size[0]).map(v=>v.split(" "));
let result = [];

for (let i = 0; i < hang1.length; i++) {
  let value = [];
  for (let j = 0; j < hang2[0].length; j++) {
    let gop = hang1[i].map((el, idx) => el * hang2[idx][j]);
    let sum = gop.reduce((past, curr) => past + curr, 0);
    value.push(sum);
  }
  result.push(value.join(" "));
}

console.log(result.join("\n"));