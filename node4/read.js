const fs = require('fs');

//파일을 읽어 들입니다.
const a = fs.readFileSync('a.txt');
const b = fs.readFileSync('b.txt');
const c = fs.readFileSync('c.txt');

console.log(a, b, c);