let express = require('express');
let app = express();
// 요청 패스에 따라 라우팅하는 과정 
// 1) 라우터 객체 참조
// let router = express.Router();
// 2) 요청 패스에 따라 실행될 라우팅 함수 등록
// router.route('/process/login').post(function(req, res) {
// router.route('/process/login/:name').post(function(req, res) {
// 3) 라우터 객체를 app 객체에 등록
// app.use('/', router);
app.use(function(request, response, next) {
    //데이터를 추가합니다.
    request.nummber = 52;
    response.number = 273;
    next();
});
app.use(function(request, response, next) {
    //응답합니다.
    response.send(`<h1>` + request.number + ':' + response.number + `</h1>`);
});

app.listen(3000, function() {
    console.log('Server running at http://localhost:3000')
})