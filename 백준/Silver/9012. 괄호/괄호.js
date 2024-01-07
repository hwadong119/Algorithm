let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0].split(' ')[0]);
for (let i = 1; i <= T; i++) {
    let stack = [];
    let ans = 'YES';
    let str = input[i].trim();

    for (let j = 0; j < str.length; j++) {
        if (str[j] === '(') {
            stack.push(str[j]);
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                ans = 'NO';
                break;
            }
        }
    }

    if (stack.length > 0) {
        ans = 'NO';
    }

    console.log(ans);
}