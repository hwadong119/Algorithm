// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// ['1', '2']
let data = input[0].split(' ')

let a = Number(data[0]) // 1
let b = Number(data[1]) // 2

console.log(a * b)