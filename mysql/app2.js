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
        connection.query(
            'insert into testtable values (?,?)',
            ['3335', 'kims']
        );
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

// connection.query('SELECT * FROM TestTable', 
// (error, rows, fields) => {
//     console.log('USERS info: ', rows);
// });

