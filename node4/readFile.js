// 모듈을 추출합니다.
const fs = require('fs');

// 파일을 읽어 들입니다.
fs.readFile('textfile.txt', 'utf8', (error, data) => {
    // 출력합니다.
    console.log(data);
});