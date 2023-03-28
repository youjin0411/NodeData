const fs = require('fs');

fs.writeFileSync('output.txt', 'Hello World');
console.log('output.txt 파일에 데이터 쓰기 완료');