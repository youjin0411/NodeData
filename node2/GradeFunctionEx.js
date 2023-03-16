const students = [ //리스트 초기화 
    { name: 'kyeongrok', age: 31, score: 85 },
    { name: 'jihyun', age: 31, score: 95 },
    { name: 'minsup', age: 35, score: 76 },
];

function getDegree(score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 60) return 'C';
    return 'F';
}

// students.forEach문은 students 리스트의 각각의 요소를 student라는 변수에 할당하고
// 그 변수를 이용하여 console.log를 실행합니다. 
students.forEach((student) => {
    const result = `name: ${student.name}, score: ${getDegree(student.score)}`;
    console.log(result);
});