console.log('argv 속성의 파리미터 수 : ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(item, index) { //index, item은 변수
    console.log(index + ':', item);
});

// console.dir(process.env);
// console.log('OS 환경 변수의 값 : ' + process.env['OS']);