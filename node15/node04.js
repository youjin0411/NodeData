let express = require('express');

let app = express();

// 라우터를 설정합니다.
// expressjs.com - guide - routing 참고
app.get('/users/:userId/:bookId', function(request, response) {
    // 1) 변수 선언 
    // let user = request.params.userId;
    // let book = request.params.bookId;
    // response.send('<h1>' + user + ',' + book + '</h1>');
    // 2) req.params;
    response.send(request.params);
});

// 서버를 실행합니다.
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});