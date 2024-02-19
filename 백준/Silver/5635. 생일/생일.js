const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())
const studentList = [];

for (let i = 0; i < n; i++) {
  const studentInfo = input[i].split(" ").map(String);
  const temp = [];

  if (studentInfo[2].length === 1) {
    studentInfo[2] =  "0" + studentInfo[2];
  }

  if (studentInfo[1].length === 1) {
    studentInfo[1] =  "0" + studentInfo[1];
  }

  temp.push(studentInfo[3] + studentInfo[2] + studentInfo[1]);
  temp.push(studentInfo[0]);

  studentList.push(temp);
}

studentList.sort();

console.log(studentList[studentList.length - 1][1] + "\n" + studentList[0][1])