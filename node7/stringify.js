const userList = [
    { name: '홍길동', age: 50, address: '서울시' },
    { name: '이길동', age: 40, address: '인천시' },
];

const fs = require('fs');
// fs.writeFile은 파일을 쓰는 함수로, /mlist.json 파일에 userList를 쓴다.
// /mlist.json 파일이 없으면 새로 만들고, 있으면 덮어쓴다.
// 여기 상황에서의 /miist.json 파일은 node7 폴더에 존재하지 않고 있기 때문에 새로 만들어진다. 
fs.writeFile('/mlist.json', JSON.stringify(userList), function(error) {
    console.log('저장완료');
});