const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const switchs = input.shift().split(" ").map(Number);
input.shift();
const actions = input.map((e) => e.split(" ").map(Number));

function men (number, switchs) {
  for (let i = 0; i < switchs.length; i++) {
    if ((i + 1) % number === 0) {
      switchs[i] = switchs[i] === 0 ? 1 : 0;
    }
  }
}

function women (number, switchs) {
  const range = Math.max(number - 1, switchs.length - number);
  switchs[number - 1] = switchs[number - 1] === 0 ? 1 : 0;
  for (let i = 1; i <= range; i++) {
    if (switchs[number - 1 - i] != switchs[number - 1 + i]) break;
    switchs[number - 1 - i] = switchs[number - 1 - i] === 0 ? 1 : 0;
    switchs[number - 1 + i] = switchs[number - 1 + i] === 0 ? 1 : 0;
  }
}

actions.forEach(([type, number]) => {
  if (type === 1) men(number, switchs);
  else women(number, switchs);
});

let result = [];
while (switchs.length > 0) {
  result.push(switchs.splice(0, 20).join(" "));
}

console.log(result.join("\n"));