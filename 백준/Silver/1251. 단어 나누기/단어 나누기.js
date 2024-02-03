const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const word = input[0];
const len = word.length;

let words = [];

for (let i = 1; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
        words.push(
            word.slice(0, i).split('').reverse().join("") +
            word.slice(i, j).split('').reverse().join("") +
            word.slice(j).split('').reverse().join("")
        );
    }
}

console.log(words.sort()[0]);