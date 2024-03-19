const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const A = input[0];
const B = input[1];
console.log(A+B);