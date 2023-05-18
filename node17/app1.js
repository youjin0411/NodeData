// body-parser 이용하여 input 태그를 입력받은 값을 콘솔에 출력하는 프로그램
const express = require('express');
const app = express();

// urlencoded()의 옵션
// extended는 중첩된 객체표현을 허용할지 말지를 정하는 것 
// urlencoded는 url 형식의 데이터 전달을 의미
// 객체 안의 객체를 파싱할 수 있게 하려면 true
// true이면 as 모듈을 사용
// false이면 기본 내장된 querystring 모듈을 상요
// querystring.parse는 객체를 상속받지 않는다.
// {extended: ture} 를 하면 as.parse를 사용하므로, 중첩 객체 파싱 가능 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
        <input type="submit" name = "position" value = "문과생">
        <input type="submit" name = "position" value = "이과생">
    </form>
    `);
});

app.post('/', (req, res) => {
    const {
        body: { position }, //전달받은 값이 position 하나 
    } = req;
    // console.log(req.body); //req.body에 name, value를 객체형식으로 넣는다.
    // 여러값을 전달받은 경우:
    // const {body: {position, title, description...}, } = req;로 
    res.send(
        `<script>alert("${position});
        window.location.href = "/";
        </script>`
        //알림창이 뜨면서 확인 클릭 시 "localhost: 3333/"으로 이동
    )
});

app.listen(3333, () => {
    console.log('3333번 포트에서 서버 시작')
})