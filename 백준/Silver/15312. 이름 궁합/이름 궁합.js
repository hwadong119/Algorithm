const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input.map(String);
const combine = [];
const line = [
  3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1,
];

for (let i = 0; i < A.length; i++) {
  combine.push(line[A.charCodeAt(i) - "A".charCodeAt(0)]);
  combine.push(line[B.charCodeAt(i) - "A".charCodeAt(0)]);
}

while (true) {
  const tmp = [];
  for (let i = 0; i < combine.length - 1; i++) {
    tmp.push((combine[i] + combine[i + 1]) % 10);
  }

  combine.length = 0;
  combine.push(...tmp);

  if (combine.length === 2) {
    console.log(`${combine[0]}${combine[1]}`);
    process.exit(0);
  }
}
