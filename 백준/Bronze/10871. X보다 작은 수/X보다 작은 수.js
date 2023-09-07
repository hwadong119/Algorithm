let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
    
const [ inputs, A ] = input
const [ N, X ] = inputs.split(' ')
    
const result = A.split(' ').filter(val => Number(val) < Number(X)).join(' ')

console.log(result)