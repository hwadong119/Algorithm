const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input.shift());
  const name = input;

  let check = name[0] < name[1];

  for (let i = 1; i < N - 1; i++) {
    if (check != name[i] < name[i + 1]) {
      console.log("NEITHER");
      process.exit(0);
    }
  }
  if (check) console.log("INCREASING");
  else console.log("DECREASING");
});