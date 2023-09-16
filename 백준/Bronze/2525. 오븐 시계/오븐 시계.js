let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [A, B] = input[0].split(" ");
let C = input[1];

A = Number(A);
B = Number(B);
C = Number(C);

minute = B + C;
hour = parseInt(minute / 60);
minute = minute % 60;
hour = hour + A;
if (hour > 23) {
  hour = hour -24;
}


console.log(hour + " " + minute);