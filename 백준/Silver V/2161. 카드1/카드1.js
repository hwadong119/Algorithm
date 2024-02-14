const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const array = Array.from({length: N}, (val, idx) => idx + 1);
const narray = [];

while(array.length !== 0) {
  const i = array.shift();
  narray.push(i);
  if (array.length !== 0) {
    array.push(array.shift());
  } else {
    break;
  }
}

console.log(...narray)