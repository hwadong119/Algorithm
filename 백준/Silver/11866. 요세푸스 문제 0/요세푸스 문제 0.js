let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0].split(' ')[0]);
let K = Number(input[0].split(' ')[1]);

let peo = [];

for (let i = 1; i <= N; i++) {
    peo.push(i);
}

let pt = 0;
let ans = [];
for (let i = 0; i < N; i++) {
    pt = (pt + K -1) % peo.length;
    ans.push(peo.splice(pt, 1)[0]);
}

console.log("<" + ans.join(", ") + ">");