
function checkMatch(n) {
    const digit1 = Math.floor(n / 100);
    const digit2 = Math.floor((n / 10) % 10);
    const digit3 = n % 10;

    const diff1 = digit1 - digit2;
    const diff2 = digit2 - digit3;

    return (n < 100 || diff1 === diff2);
}

const fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = parseInt(input[0]);
let ans = 0;

for (let i = 1; i <= N; i++) {
    if (checkMatch(i)) {
        ans++;
    }
}

console.log(ans);
