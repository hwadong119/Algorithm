const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
let names = "";

const students = input
  .map(v => v.split(" ").map(vv => Number(vv) || vv))
  .sort((a, b) => {
    return b[1] - a[1] || a[2] - b[2] || b[3] - a[3] || (a[0] > b[0] ? 1 : -1);
  })

  students.forEach(el => {
  names += el[0] + "\n";
})

console.log(names);