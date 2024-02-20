const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [x, y] = input.shift().split(" ").map(Number);

let x_arr = [0, x];
let y_arr = [0, y];

let numRectangles = Number(input.shift());

for (let i = 0; i < numRectangles; i++) {
  let rectangleInfo = input[i].split(" ");
  let xy = Number(rectangleInfo[0]);
  let length = Number(rectangleInfo[1]);

  if (xy === 0) {
    y_arr.push(length);
  } else {
    x_arr.push(length);
  }
}

x_arr.sort((a, b) => a-b);
y_arr.sort((a, b) => a-b);

let ans = 0;
for (let i = 1; i < x_arr.length; i++) {
  for (let j = 1; j < y_arr.length; j++) {
    let width = x_arr[i] - x_arr[i-1];
    let height = y_arr[j] - y_arr[j-1];
    ans = Math.max(ans, width * height);
  }
}


console.log(ans);