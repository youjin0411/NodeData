// 모듈을 추출합니다.
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

//서버를 생성하고 실행합니다. 
http.createServer(function(request, response) {
    //ejsPage.ejs 파일을 읽습니다.
    //ejs페이지에서 name, description 속성을 전달
    fs.readFile('ejsPage2.ejs', 'utf8', function(error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(ejs.render(data, {
            name: 'RintIanTta',
            description: 'Hello ejs with node.js'
        }));
    });
}).listen(3333, function() {
    console.log('Server running at http://127.0.0.1:3333');
});