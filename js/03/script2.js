// 함수 : 데이터 타입

function f(d){
    var a = 10;
    var b = function(){
        function inner(){

        }
    }
    b();
    d();
    return b;
}

// let x = f(function(){

// });
// x();
// f(function(){})();

(function(param){
    console.log(param);
})(10);

// callback function : 파라미터로 전달되는 함수
function f(){
    console.log('메세지');
}
// setInterval(f, 1000);

// $(function(){
//     $("#id").text(function(){});
// })

let f2 = f;
f2();

let f3 = function(callback){
    typeof callback === 'function' && callback(); // function이라는게 참이면 callback() 함수 수행 : 참이면 수행
    // callback();
}
console.log("=====================");
// f3(f);
f3(function(){
    console.log("익명함수 내용 출력");
});
// f3();

// 클로저

function outer(){
    // 변수 선언
    let str = "abcd";
    function inner(){
        console.log("inner()");
        return str;
    }
    return inner;
}
console.log(typeof outer); // function type
console.log(typeof outer());
outer()();

// 지역 변수 : 함수가 호출 될 때 초기화, 함수가 끝날때 소멸
// 클로저 : 위를 소멸 되지 않게 함, 내부 함수는 외부 함수를 참조 가능, 그 반대는 불가 

// this : 가장 가까운 객체를 참조 
let person = new Object();
person.firstName = 'John';
person.lastName = 'Doe';
person.age = 1200;
person.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

console.log(person);
console.log(person.getFullName());

// length는 property 
let str = "ABCDE12345"; // -10 ~ -1
// slice, substring(fromIndex, toIndex)
// substr(index, count)
 console.log(str.slice(3,6)); // <<<
 console.log(str.substring(3,6));
 console.log(str.substr(3,6));

 console.log(str.charAt(6));
 console.log(str[6]);
 console.log(str.slice(6, 7));

 str = "ABCDEabcdeABCDE";
//  console.log(str.replace('A', '1'));
 console.log(str.replace(/A/g, '1')); // g : 전체
 console.log(str.replace(/[A-C]/gi, '1')); // g : 전체 대소문자 구분 없이 
//  str.replace();

// 정규 표현식 
// flag : g 전체, i 대소문자 구분 없음, m 다중행 
let regExp1 = new RegExp("[A-Z]", "gim");
let regExp2 = /[A-Z]/gim;

str = "abcd";
str = 'abcd';
str = `abcd`; // 1옆에  