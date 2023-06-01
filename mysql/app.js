const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'kim',
    password: 'kim',
    database: 'mydb'
});

connection.connect(function(err){
    if(err){
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }else{
        console.log('연결에 성공하였습니다.')
    }
});

// 2) users 테이블의 데이터 출력
connection.connect()
connection.query('SELECT * FROM USERS', 
(error, rows, fields) => {
    if(error) throw error;
    console.log('USERS info: ', rows);
});

connection.end();