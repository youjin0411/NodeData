function printHello() {
    console.log("Hello, World!");
}
printHello();

const printBye = () => {
    console.log('bye');
}

printBye();

// 일반 함수 
let sum = function(a, b) {
    return a + b;
};

// 화살표 함수
let sum2 = (a, b) => a + b;

//자바스크립트의 함수 종류는 3가지이다.
//1. 일반 함수
function add(a, b) {
    return a + b;
}
//2. 화살표 함수
const add2 = (a, b) => a + b;
//3. 생성자 함수
const add3 = new Function('a', 'b', 'return a + b');