
const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]);

let ans = 0;

for (let i = 0; i < N; i++) {
    let stack = [];
    const word = input[i+1];

    for(let j = 0; j < word.length; j++) {
        if (stack.length === 0 || stack[stack.length - 1] !== word[j]) {
            stack.push(word[j]);
        } else {
            stack.pop();
        }
    }

    if (stack.length === 0) {
        ans++;
    }
}

console.log(ans);
