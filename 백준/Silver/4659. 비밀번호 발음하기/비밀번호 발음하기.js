const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function isAcceptable(word) {
  let flag = true;
  let temp = word;

  for (let x of "aeiou") {
    temp = temp.replace(new RegExp(x, "g"), "a");
  }

  for (let x of "qwrtypsdfghjklzxcvbnm") {
    temp = temp.replace(new RegExp(x, "g"), "b");
  }

  if ([...word].filter((x) => "aeiou".includes(x)).length === 0) {
    flag = false;
  }

  if (temp.includes("aaa") || temp.includes("bbb")) {
    flag = false;
  }

  if (
    [...word].filter(
      (x) => "qwrtyuipasdfghjklzxcvbnm".includes(x) && word.includes(x + x)
    ).length > 0
  ) {
    flag = false;
  }

  return flag;
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === "end") {
    process.exit(0);
  } else {
    const flag = isAcceptable(input[i]);
    console.log(`<${input[i]}> is ${flag ? "acceptable" : "not acceptable"}.`);
  }
}
