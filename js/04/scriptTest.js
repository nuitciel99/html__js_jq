// let students = [];
// students.push({ no : 1, name : '홍길동'});
// students.push({ num : 2, studentName : '김길동'});
// students.push(10);

// console.log(students);

// function Student(no, name, kor, eng, mat){
//     this.no = no;
//     this.name = name;
//     this.kor = kor;
//     this.eng = eng;
//     this.mat = mat;
//     this.total = function(){
//         return kor + eng + mat;
//     }
// };

// let student = new Student(1, '홍길동', 80, 90, 80);
// console.log(student.no);
// console.log(student.name);
// console.log(student.total());

let array = [10, 20, 30];
console.log(array);

let array2 = { a : 1, b : 2, c : 3};
// console.log(array2);

console.log("==============================");

function Student(no, name, kor, eng, mat){
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
};
let student = new Student(1, '홍길동', 90, 80, 90);
// console.log(student);

// 4-1. prototype을 활용해 total 함수 생성
Student.prototype.total = function(){
    return this.kor + this.eng + this.mat;
};
console.log(student.total());
// 4-2. prototype을 활용해 평균 함수 생성
Student.prototype.avg = function(){
    return this.total() / 3;
};
console.log(student.avg());
// 4-3. prototype을 활용해 String type으로 평균 조회 함수 생성
Student.prototype.toString = function(){
    return this.no + "::" + this.name + "::" + this.avg();
};
console.log(student.toString());
// 4-4. prototype을 활용해 한 문자열 연달아 조회 함수 생성
String.prototype.doubleToString = function(){
    return this + this;
};
let str = "abcd";
console.log(str.doubleToString());
// 4-5. prototype을 활용해 String type  날짜 조회 함수 생성
Date.prototype.format = function(){
    let d = this; // this : 날짜
    let result = d.getFullYear() + "-" + toLeadZero(d.getMonth()+1) + "-" + toLeadZero(d.getDate());

    function toLeadZero(number){
        return (number + "").padStart(2, "0");
    };
    return result;
};
let d = new Date();
console.log(d.format()); // String type
// 4-6.  prototype을 활용해 String을 Date type으로 조회 함수 생성 
String.prototype.parse = function(){
    let s = this;
    let a = s.split("-"); // 기준으로 잘라서 배열에 담음
    let d = new Date();
    d.setFullYear(a[0]);
    d.setMonth(a[1]-1);
    d.setDate(a[2]);
    return d;
};
str = "2020-05-05";
console.log(str.parse());
// 4-7.  prototype와 파라미터(index)를 활용해 배열의 요소 한개 제거 함수 생성
Array.prototype.remove = function(idx){
    this.splice(idx-1, 1);
    return this;
};
let arr = [1, 2, 3];
console.log(arr.remove(2));
// 5. prototype chaining 

function Car(no, name){  // 생성자 함수 
    this.no = no;
    this.name = name;
};

// 함수와 prototype은 서로 마주보고 있음(참조)
// Car.prototype : constructor와 __proto__
// __proto__ : prototype link : 모든 객체가 가지고 있음 : 상속과 유사해 서로 참조하게 해줌

Car.prototype.gas = function(amount){  
    return amount + " 충전 완료";
};

let benz = new Car(1, 'benz'); // Car 객체 생성 시 Car 생성자 함수와 prototype 객체도 함께 생성됨
let bmw = new Car(2, 'bmw');   // 모든 객체는 prototype link를 가지고 있다고 했으므로 benz객체와 bmw객체도 prototype 객체와 참조하고 있음

console.log(benz.gas(1));
console.log(bmw.gas(3)); // 두 객체에 gas()가 정의 되지 않았지만, 서로 참조하고 있기 때문에 prototype type의 gas() 활용 가능

function Student(no, name, kor, eng, mat){
    var _no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
    
    this.getNo = function(){
        return _no;
    };
    this.setNo = function(no){
        _no = no;
    };

    this.total = function(){
        return this.kor + this.eng + this.mat;
    };
    this.avg = function(){
        return this.total() / 3;
    }
    this.toString = function(){
        return this.no + "::" + this.name + "::" + this.avg();
    };
};
student = new Student(1, '황길동', 90, 80, 60);
console.log(student.no);
student.setNo(3);
console.log(student.getNo());
console.log(student.no);