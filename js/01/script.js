console.log("hello js");

// 1. 데이터 타입, 기본 문법
// 2. 연산자 
// 3. 제어문
// 4. 자료 구조
// 5. 객체(내장 객체) > 사용자 정의 객체 
// 6. 브라우저 객체
// 7. 문서 객체 (DOM)
// 8. 이벤트 event

// 9. 비동기 
// 10. es6문법
// 11. prototype, 상속, class 구문, function scope

// 12. jQuery

// data type
// 기본형 : 문자, 숫자, 논리
// 특수형 : 객체, 함수, 심볼, undefined

// 변수 선언
var a = 10 // ; 없어도 됨
var b = '김' // 
var c = false // 

console.log(a, b, c); 

a = 20
console.log(a, b, c); 

a = 'kim'
console.log(a, b, c); 

//타입 확인 연산자 : typeof
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

var d = 10.5;
console.log(typeof d);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(3.14 + 1);

var e;
console.log(e);

// not defined와 undefined는 다름 
// console.log(f);

d = undefined;
console.log(d);

var f = function(){
    console.log("i'm function");
};

var g = {a:1, b:2};
console.log(g.a);
console.log(g.b);

f();

console.log(typeof f)
console.log(typeof g)
console.log(typeof d)

// number : 65비트 double type  

console.log(!a);
console.log(!d);

// 예약어
// 사전에 정의된 키워드

// 연산자
// 산술 비교 논리 대입

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);

// == != < > <= >=  === !==
// 값만 비교
console.log(3 == '3');
console.log(3 != '3');
// 타입 비교
console.log(3 === '3');
console.log(3 !== '3');

// && || !