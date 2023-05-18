// body-parser 이용하여 input 태그를 입력받은 값을 콘솔에 출력하는 프로그램
const express = require('express');
const app = expres();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
        <input type="submit" name = "position" value = "문과생">
        <input type="submit" name = "position" value = "이과생">
    </form>
    `)
})

app.post('/', (req, res) => {
    console.log(req.body); //req.body에 name, value를 객체형식으로 넣는다.
});

app.listen(3333, () => {
    console.log('3000번 포트에서 서버 시작')
})