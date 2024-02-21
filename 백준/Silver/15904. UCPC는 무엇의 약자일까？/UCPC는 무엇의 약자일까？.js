const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0];

console.log(`I ${/[U].{0,}[C].{0,}[P].{0,}[C]/g.test(str) ? 'love' : 'hate'} UCPC`)