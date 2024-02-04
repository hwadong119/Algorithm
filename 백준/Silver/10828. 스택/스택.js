const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const commands = input.map(i => i.split(' '));

const answer = [];
const stack = [];

for (let i = 0; i < N; i++) {
    switch (commands[i][0]) {
        case 'push':
            stack.push(commands[i][1]);
            break;
        case 'top':
            answer.push(stack.length ? stack[stack.length - 1] : -1)
            break;
        case 'size':
            answer.push(stack.length);
            break;
        case 'empty':
            answer.push(stack.length? 0 : 1);
            break;
        case 'pop':
            answer.push(stack.length ? stack.pop() : -1);
            break;
    }
}

console.log(answer.join('\n'));