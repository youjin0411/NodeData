// 함수 선언식
function printMessage(mesage) {
    console.log(message);
}

// 함수 표현식
const printWelcome = function() { // 변수에 익명함수 지정
    console.log('welcome');
}

printMessage('bye');
printWelcome();

console.log('typeof printMessage: %s', typeof printMessage);
console.log('typeof printWelcome: %s', typeof printWelcome);

// 괄호를 쓰지 않음
//함수를 선언하고, ()를 붙이지 않고, 변수에 할당하면 해당 변수(pm)는 function이 됨.
const pm = printMessage;
pm('good mornign');
console.log('typeof pm: %s', typeof pm);