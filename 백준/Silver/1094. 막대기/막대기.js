let fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let X = parseInt(input[0]);
let ans = 0;

while (X > 0) {
    if (X % 2 === 1) {
        ans++;
    }
    X = parseInt(X / 2);
}

console.log(ans);