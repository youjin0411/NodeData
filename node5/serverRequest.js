// 웹 브라우저에서 클라이언트가 웹 서버로 요청할 때 어떤 이벤트 발생하는지
let http = require('http');

//웹 서버 객체를 만든다. 
let server = http.createServer();

//웹 서버를 시작하여 3000번 포트에서 대기하도록 한다. 
let port = 4000;
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다. : %d', port);
});

//클라이언트 연결 이벤트 처리
//이벤트는 on으로 처리 connection이 발생하면 내부적으로 socket 생성
server.on('connection', function(socket) {
    console.log('클라이언트가 접속했습니다. : %s, %d', socket.remoteAddress, socket.remotePort);
});

//클라이언트의 요청(request) 이벤트 처리
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    console.dir(req);
})

//서버 종료 이벤트 처리
server.on('close', function() {
    console.log('서버가 종료됩니다.');
});