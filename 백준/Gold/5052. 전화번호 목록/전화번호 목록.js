
const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let idx = 0;
let T = input[idx++];

for (let i = 0; i < T; i++) {
    let flag = true;
    let phoneVec = [];
    const N = input[idx++];
    for (let j = 0; j < N; j++) {
        phoneVec.push(input[idx++]);
    }

    phoneVec.sort();

    for (let k = 0; k <= phoneVec.length - 2; k++) {
        const currentLen = phoneVec[k].length;
        const nextLen = phoneVec[k + 1].length;

        if (currentLen >= nextLen) {
            continue;
        }

        if (phoneVec[k + 1].startsWith(phoneVec[k])) {
            flag = false;
            break;
        }
    }
    
    if (flag) {
        console.log("YES");
    } else {
        console.log("NO")
    }

    phoneVec = [];
} 
