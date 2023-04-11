const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// 서버 생성 및 실행
http.createServer((req, res) => {
    //EJSPage.ejs 파일 읽기
    fs.readFile('ejsPage.ejs', 'utf8', (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(ejs.render(data));
    });
}).listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273');
});