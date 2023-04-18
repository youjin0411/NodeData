let express = require('express');

let app = express();

app.use(function(request, response) {
    let agent = request.header('User-Agent');
    console.log(request.headers);
    console.log(agent);

    // 응답합니다.
    // 상태 코드만 보낼 때는 sendStatus() 메소드를 사용합니다. 
    response.sendStatus(200);
});

//서버를 실행합니다.
app.listen(5000, function() {
    console.log('Server running at http://127.0.0.1:5000');
});