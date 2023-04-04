// require('fs')는 파일 시스템을 다루는 모듈이다.
const fs = require('fs')

// fs.readFile은 파일을 읽는 함수로, /mlist.json 파일을 읽어서 data에 저장한다.
fs.readFile('/mlist.json', (err, data) => {
    if (err) {
        console.log('파일을 읽을 수 없음')
    } else {
        // 아래의 코드는 node7\stringify.js에서 사용한 코드와 동일하다.
        // JSON.parse는 JSON 문자열을 자바스크립트 객체로 변환한다.
        const json = JSON.parse(data.toString());
        for (let i = 0; i < json.length; i++) {
            console.log(`이름 : ${json[i].name}, 나이 : ${json[i].age}`);
        }
    }
});