const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
if (n % 2 === 0) console.log("SK");
else console.log("CY");