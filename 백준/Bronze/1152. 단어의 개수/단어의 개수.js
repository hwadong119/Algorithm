const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split(' ')

input[0] === ''
  ? result = 0
  : result = input.length

console.log(result)