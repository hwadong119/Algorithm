const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let word = input[0];
const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let answer = 0;

for (let i = 0; i < croatian.length; i++) {
    while (word !== word.replace(croatian[i], '')) {
        answer += 1;
        word = word.replace(croatian[i], ' ');
    }
}

console.log(answer + word.split(' ').join('').length);