//모듈을 추출합니다.
let fs = require('fs');
let http = require('http');

//웹 서버를 생성하고 실행합니다. 
http.createServer(function(request, response) {
    // 응답합니다. 
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello World</h1>');
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});