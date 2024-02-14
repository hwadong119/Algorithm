const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [doc, word] = input;

let idx = 0;
let count = 0;
while (idx < doc.length) {
  const newIdx = doc.slice(idx).search(word);
  if (newIdx >= 0) {
    count++;
    idx += newIdx + word.length;
  } else break;
}

console.log(count);