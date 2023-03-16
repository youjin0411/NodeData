// main.js : 모듈을 불러오는 함수
//생성할 모듈을 다른 자바스크립트 파일에서 모듈을 추출할때 require
var modules = require('./modules.js');
console.log('abs(-273) = %d', modules.abs(-273));
console.log('circleArea(3) = %d', modules.circleArea(3));