let [ N, A ] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = A.split(' ')
                .map(val => Number(val))
                .sort((a,b) => a-b)


console.log(result[0] + ' ' + result[result.length-1])  