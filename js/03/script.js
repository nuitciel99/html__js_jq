console.log(f1, f2, f3, f4, f5, f6);

// 함수 : 기능의 묶음, 하나의 데이터 타입

// 선언적 호출
function f1(){
    console.log("f1()");
}
// 익명 방법
var f2 = function (){
    console.log("f2()");

}

// 생성자 호출을 통한 방법 
var f3 = new Function('console.log("f3()")');

f1();
f2();
f3();

console.log(typeof f1, f1);
console.log(typeof f2, f2);
console.log(typeof f3, f3);

var f4 = 10; // type? number
f4 = f1; // 함수를 담을 수 있음 : 하나의 데이터 타입 
f4();

// hoisting : 끌어올림(선언부를)

f5();
function f5(){
    console.log("f5()");
}

// f6();
var f6 = function(){
    console.log("f6()");
}

// scope(범위)
// 전역, 지역 
var a = 5;
function f(){
    var a = 10; // 지역 변수 있을때와 없을때 값 확인 
    console.log("f() 안쪽", a);
}
f();
console.log("f() 바깥쪽", a);

var a = 5;
function f(){
    a = 10; // 지역 변수 있을때와 없을때 값 확인 
    console.log("f() 안쪽", a);
}
f();
console.log("f() 바깥쪽", a);

var a = 5;
function f(){
    var a = 1;
    console.log("f() 안쪽", a); // 1
    a = 10; // 지역 변수에서 값 바뀐거 뿐 
}
f();
console.log("f() 바깥쪽", a); // 5

var a = 5;
function f(){
    console.log("f() 안쪽", a); 
    var a = 1;
    a = 10; // 지역 변수에서 값 바뀐거 뿐 
}
f();
console.log("f() 바깥쪽", a); // 5

var a = 5;
function f(){
    var a; // 이 작업을 함
    console.log("f() 안쪽", a); 
    a = 1;
    a = 10; // 지역 변수에서 값 바뀐거 뿐 
}
f();
console.log("f() 바깥쪽", a); // 

function f(){
    a = 10; // 
}
f();
console.log("f() 바깥쪽", a); // 10

var a = 5;
function f(){
    console.log("f() 안쪽", a); 
    // var a = 1;
    a = 10; // 
}
f();
console.log("f() 바깥쪽", a); // 10

// 지역 구간에서 전역의 값을 제어할 수 있음 : 되도록 쓰지 말기 
// java : 블록레벨 스코프
// if(조건식){int i = 10;} 

// javascript : 함수 레벨 스코프 
if(true){
    var num = 10;
}
{
    {
        {
            var num = 10;
        }
    }
}
console.log(num);

// let : var와의 차이
// 1. 블록레벨 스코프 
// 2. 중복 선언 불가 
// 3. 호이스팅 불가 

var num = 10;  
var num = {};
var num = function(){};
console.log(num);  // 중복 선언 가능

// let num = 20;
// let num = 30;
console.log(num);

{
    let str = "1234";
}
// console.log(str); // error
console.log(a); // undefined
var a = 20;
let b = 10;
console.log(b); // undefined

// 보안 이슈로 사용금지 권장 
eval("console.log('abcd')")