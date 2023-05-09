let express = require('express'),
    http = require('http'),
    path = require('path');

let bodyParser = require('body-parser')
let static = require('serve-static');

let app = express();
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/public', static(path.join(__dirname, 'public')));

let router = express.Router();

router.route('/process/login').post(function(req, res) {
    console.log('/process/login 처리함.');
    let params = req.params.name;
    let paramId = req.body.id || req.query.id;
    let paramPassword = req.body.password || req.query.password;

    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param name : ' + params + '</p></div>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write('<br><br><a href="/public/login3.html">로그인 페이지로 돌아가기</a>');
    res.end();
});
app.use('/', router);

app.all('*', function(req, res) {
    res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});