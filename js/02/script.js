var num = 10;
// es6 이상에서 변수를 선언하는 방법
let num2 = 20;
const num3 = 30;
// var : ecma script 5 이하에서 변수를 선언할 때 사용하는 키워드
// let : es6 이상에서 변수를 선언하는 방법
// const : es6 이상에서 상수를 선언하는 방법

var num = '홍길동'; // 중복 선언 오류 발생하지 않음 
num2 =  '김길동'; // 중복 선언 오류 발생

// scope
num4 = 30;
console.log(num, num2, num3, num4);

var f = function(){
    
    // var num5 = 10; 지역 변수
    num5 = 10; // 전역 변수
}

f();
console.log(num5);

// 대입 연산자 
// = += -= *= /= %= **=
// 산술 연산자
// = - * / % **

let x = 1;
let y = 2;
x = x + y;
console.log(x, y);
x= x - y ;
console.log(x, y)
x = 3;
y= 2;
console.log(x, y)
x = x * y;
console.log(x, y)
x = x / y;
console.log(x, y)
x= x % y;
console.log(x, y)
x = 3;
x = x**y;
console.log(x, y)

x = 2 + 3 * 4 ** 2;
console.log(x);

// 비교 연산자 
// 동치 == != === !== 대소 < <= > >=
x = 3;
y = 4;
console.log(x == y);
console.log(x != y);
y = '3';
console.log(x != y);
console.log(x != y);
x = 1;
y = true;
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);

// typeof
// + : 덧셈, 문자열 결합, 부호 
// x = -3;
// y = +x; // y = -3

// x = "-3";
// y = x; // y는 string type
// console.log(y, typeof y);
// y = +x; // y는 number type
// console.log(y, typeof y);

x = "-3";
y = x;
console.log(y, typeof y);
y = +x;
console.log(y, typeof y);

// NaN : 숫자가 아님
x = 'a';
y = +x;
console.log(y, typeof y);
console.log(NaN == y);

// NaN 여부 확인 함수 : isNaN
console.log(isNaN(y));