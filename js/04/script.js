// js 객체를 만드는 방법
// 숫자를 저장할 변수 1. 리터럴  2. 생성자 호출 new
let num = 10;
num = new Number(10);

// 숫자, 문자, 논리 

// 객체 {} 배열 []
let arr = new Array();
arr = [];

let obj = new Object(); // Object : 생성자 
obj = {};

let regExp = new RegExp("A");
regExp = /A/;

// JS의 생성자 == 함수 
function test(){
    console.log('test()');
};

test(); // 함수 호출, return 없으니까 undefined

let ret = new test(); // 객체가 됨, ? object
console.log(ret.toString());  // object object

// 학생 배열 
let students = [];
// students.push({no : 1 , name : '홍길동'});
students.push({no : 1 , name : '홍길동'});
students.push({num : 1 , studentName : '김길동'});
students.push(10);
// 생성자 함수를 VO에 담은것 : 자바의 VO와 같음
console.log(students);

// this : 생성된 객체의 주소, this.no는 밑에 no
function Student(no, name, kor, eng, mat){
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
    this.total = function(){
        return this.kor + this.eng + this.mat;
    };
};
// 멤버 == 프로퍼티
// 
// 필드(멤버 중 변수)
let student = new Student(1, '이길동', 80, 90, 80);
console.log(student.no);
console.log(student.name);
console.log(student);

// student.name = function(){
//     return 1000;
// }
// console.log(student.name());
student.total = function(){
    return this.kor + this.eng + this.mat;
};
console.log(student.total());  

// students = [];
students.push(new Student(1, '이길동', 80, 70, 70));
students.push(new Student(2, '김길동', 60, 70, 70));
students.push(new Student(3, '홍길동', 70, 90, 90));

console.log("=================================");
students.forEach(s => console.log(s.total()))

// console.log(students);

// class Car {
//     constructor(name, price){
//         this.name = name;   
//         this.price = price;
//     }
// }
// let car = new Car('제네시스', 7000);
// console.log(car);

// Student();
