let students = [];
students.push({no:10, name:'홍길동', score:80});
students.push({no:20, name:'김길동', score:60});
students.push({no:30, name:'이길동', score:60});
students.push({no:40, name:'박길동', score:90});
// stream 류 메서드
// students

// map and reduce 
// 점수가 70이상인 학생
// 반환 타입이 boolean Predicate 1개의 입력 1개의 불린 반환
// let result = students.filter(function(a){
//     console.log("===================================");
//     console.log(a.score);
//     return a.score >= 70;
// });

// console.log(result);

// result = students.filter(elem => elem.score >= 70);
// console.log(result);
// result = students.filter((elem, idx) => idx%2);
// console.log(result);
// result = students.filter(elem=> elem.name.startsWith("김"));
// console.log(result);  // react에 많이 사용함 

// map Function 1개의 입력 1개의 출력
let result = students.map(function(a){return a.no + " " + a.name});
console.log(result);

// forEach Consumer 1개의 입력 0개의 출력
students.forEach(function(a){
    console.log(a.no);
});

// find, some, every
// find : 앞부터 단일 탐색, 일치하면 정지 
result = students.find(function(a){return a.score === 60});
console.log(result);

// some 일부 만족 any : boolean : DB 서브쿼리
// every 전체 만족 all
result = students.some(function(a){return a.score >= 70});
console.log(result);
result = students.every(function(a){return a.score >= 70});
console.log(result);

let arr = [1, 2, 3, 4, 5];
result = arr.map(function(a){return a*a}); // result 배열의 결과는 arr 각 요소의 제곱으로 구성된 배열로 제작
// arr의 요소 중에 홀수의 결과를 제곱한 배열을 제작
result = arr.filter(function(a){return a % 2 ==1}).map(function(a){return a*a});
console.log(result);
// arr의 요소를 제곱하고 그 크기가 10이상인 배열을 제작
result = arr.map(function(a){return a*a}).filter(function(a){return a>= 10});
console.log(result);

result = students.reduce(function(a, b){ // 누적 합
    console.log(a);
    return a+b.score
}, 0);
console.log(result, result / students.length);

result = students.reduceRight(function(a, b){ // 오른쪽부터 누적 합
    console.log(a);
    return a+b.score
}, 1);
console.log(result, result / students.length);

// function(a, b){ // 오른쪽부터 누적 합
//     console.log(a);
//     return a+b.score
// }                  ====>>> 익명함수도 값으로 판단해야함