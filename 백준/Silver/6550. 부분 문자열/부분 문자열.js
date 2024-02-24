const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input.map(v => v.split(" "));

for (let i = 0; i < str.length; i++) {
  const s = str[i][0];
  const t = str[i][1];

  const queueS = s.split("");

  for (spell of t) {
    if (spell === queueS[0]) {
      queueS.shift();
    }
  }

  console.log(queueS.length === 0 ? "Yes" : "No");
}
