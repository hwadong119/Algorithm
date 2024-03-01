const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

let maxCount = 0;
let maxName = "";
const dict = {};

input.forEach(name => {
  if (dict[name]) dict[name]++;
  else dict[name] = 1;

  if (dict[name] === maxCount && name < maxName) maxName = name;
  else if (dict[name] > maxCount) {
    maxName = name;
    maxCount = dict[name];
  }
});

console.log(maxName);