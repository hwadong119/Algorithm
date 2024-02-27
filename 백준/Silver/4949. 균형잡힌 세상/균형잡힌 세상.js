const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];
for (let txt of input) {
  const stack = [];
  let isCompare = true;
  if (txt === ".") break;
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === "[" || txt[i] === "(") {
      stack.push(txt[i]);
    } else if (txt[i] === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else {
        isCompare = false;
        break;
      }
    } else if (txt[i] === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else {
        isCompare = false;
        break;
      }
    } else if (txt[i] === ".") break;
  }

  if (stack.length > 0 || !isCompare) answer.push("no");
  else answer.push("yes");
}

console.log(answer.join("\n"));