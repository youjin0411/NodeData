const user = {};
user.name = "kyeongrok";
user.age = 31;

console.log(user);

// key에 해당하는 값에 원래는 ""를 붙여주어야 하지만 코딩 편의성 붙여주지 않아도 됩니다. 
const user2 = { name: 'kyeongrok', age: 31 };
console.log(user2);

const user3 = { name: 'kim', age: 31 };
console.log('user3 :', user3);
console.log('user3.name :', user3.name);
console.log('user3.age: ', user3.age);

user.job = 'developer';
user.nation = 'korea';
console.log(user3);

const fieldName = 'age';
console.log(user3[fieldName]);