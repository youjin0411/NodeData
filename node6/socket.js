let http = require('http');
const { charset } = require('mime-types');
//클라이언트 요청을 받았을 때 응답 보내기
let server = http.createServer()
    //웹 서버 객체를 만듭니다. 

let port = 4000;
//웹 서버를 시작하여 4000번 포트에서 대기하도록 합니다. 

server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다. : %d', port);
});

//클라이언트 연결 이벤트 처리 
// on() 메서드는 이벤트 처리하는 기본 메소드이다. 
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    // 파일을 읽습니다.
    res.writeHead(200, {
        // 한글로 된 요청이 들어오면 깨지는 것을 방지하기 위해
        // Content-Type에 charset=utf-8을 추가합니다.
        // 그래도 깨지면 encoding: 'utf8'을 추가해야 합니다.
        "Content-Type": "text/html; charset=utf-8"
    });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("	<head>");
    res.write("		<title>응답 페이지</title>");
    res.write("	</head>");
    res.write("	<body>");
    res.write("		<h1>노드제이에스로부터의 응답 페이지</h1>");
    res.write("	</body>");
    res.write("</html>");
    res.end();
});