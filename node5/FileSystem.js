//모듈을 추출합니다.
let fs = require('fs');
let http = require('http');

//서버를 생성하고 실행합니다. 
http.createServer((request, response) => {
        //HTML파일을 읽습니다. 
        fs.readFile('./HTMLPage.html', (error, data) => {
            //응답합니다. 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    }).listen(52273, () => {
            console.log('Server Running at http://);	
            });