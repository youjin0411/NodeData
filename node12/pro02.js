/*
app.use('/test', handler)
:/test으로 시작하는 모든 요청에 응답, 모든 method에 응답

app.get('/test', handler)
:/test으로 시작하는 모든 요청에 응답, GET method에 응답
*/
var express = require('express');
var app = express();

app.use(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('<h1>Hello World</h1>');
});

app.listen(3434, function() {
    console.log('Server running at http://localhost:3434');
});