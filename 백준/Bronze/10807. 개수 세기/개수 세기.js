let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, S, V] = input
const cnt = S.split(' ').filter(val => val==V).length

console.log(cnt);