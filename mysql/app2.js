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
        // connection.query(
        //     'insert into testtable values (?,?)',
        //     ['3335', 'kims']
        // );
        // 1) testtable 삽입
        // var sql2 = "insert into testtable values (?,?)";

        // var input_data1 = [3306, "park"];
        // connection.query(sql2, input_data1, function(err){
        //     console.log("삽입완료1");
        // })

        // 2) testtable 수정 
        var sql3 = "update TestTable SET str_name = ? where no = ?";
        var update_date = ['김길동', 3333];
        connection.query(sql3, update_date, function(error) {
            console.log("수정완료")
        })

        // 3) testtable 삭제
        var sql4 = "DELETE FROM testtable WHERE no = (?);"
        connection.query(sql4, 3333, function(err, rows){
            console.log("삭제완료")
        })

        //4) testtable 출력
        var sql1 = "select no, str_name from testtable";
        connection.query(sql1, function(err, rows){
            for(let obj of rows) {
                console.log(`no : ${obj.no}`)
                console.log(`str_name : ${obj.str_name}`)
            }
        });
        connection.end();
    }
});

