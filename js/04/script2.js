// 생성자 함수 꼭 공부하기
// total 함수 활용법 공부하기 
// this : 생성된 객체의 주소, this.no는 밑에 no
function Student(no, name, kor, eng, mat){
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
    
};

Student.test = function(){
    return "test complete";
};

// students = [];
// students.push(new Student(1, '이길동', 80, 70, 70));
// students.push(new Student(2, '김길동', 60, 70, 70));
// students.push(new Student(3, '홍길동', 70, 90, 90));

console.log("=================================");
// students.forEach(s => console.log(s.total()));
// students.forEach(s => console.log(s.avg()));
// students.forEach(s => console.log(s));
// students.forEach(s => console.log(s.toString()));
// console.log("===================");
// students.forEach(s => document.write(s + "<br>"));

// 
// prototype : 객체들간의 공용 저장소 
// 캡슐화 : encapsulation, 필드 숨기기, java의 private

// String.fromCharCode();
console.log(Student.test());

Student.prototype.total = function(){
    return this.kor + this.eng + this.mat;
};
Student.prototype.avg = function (){
    return this.total() / 3;
};
Student.prototype.toString = function(){
    return this.no + "::" + this.name + "::" + this.avg();
};
let s = new Student(1, "a", 1, 2, 3);
console.log(s.total());
console.log(s.toString());
console.log(s);

String.prototype.doubleToString = function(){
    return this + this;
};
let str = "abcd";
console.log(str.doubleToString());

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

String.prototype.parse = function(){
    let s = this;
    let a = s.split("-");
    let d = new Date();
    d.setFullYear(a[0]);
    d.setMonth(a[1]-1);
    d.setDate(a[2]);
    return d;
};

str = "2020-05-05";
console.log(str.parse());

Array.prototype.remove = function(idx){
    this.splice(idx, 1); // this : arr
};
let arr = [10, 20, 30];
arr.remove(1);
console.log(arr);

// prototype : 
// method chaining : method 연속 호출  : java의 builder도 method chaining의 결과

// let arr = [10, 20, 30];
// function removeArr(arr, idx){ // 이렇게 하면 chaining을 못 함
//     arr.splice(idx, 1);
// };
// removeArr(arr, 1);
// console.log(arr);
// arr.remove = function(idx){
//     this.splice(idx, 1);
// }
// arr.remove(1);
// console.log(arr);
