const express = require('express');

const app = express();

app.use(function(request, response) {
    const agent = request.header('User-Agent');
    const paramName = request.query.name;
    // 매개변수를 paramName에 넣음
    const browserChrome = 'Hello Chrome';
    const browserOthers = 'Hello Others';

    console.log(request.headers);
    console.log(request.baseUrl);
    console.log(request.hostname);

    if (agent.toLowerCase().match(/chrome/)) {
        response.write(`<div><p>${browserChrome}</p></div>`);
    } else {
        response.write(`<div><p>${browserOthers}</p></div>`);
    }
    response.write(`<div><p>${agent}</p></div>`);
    response.write(`<div><p>${paramName}</p></div>`);
    response.end();
});

//서버를 실행합니다.
app.listen(5000, function() {
    console.log('Server running at http://127.0.0.1:5000');
});