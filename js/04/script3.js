// 캡슐화 : 필드 노출 X, 메서드로 우회 
// 캡슐화 : encapsulation, 필드 숨기기, java의 private

// 생성자 함수 꼭 공부하기
// total 함수 활용법 공부하기 
// this : 생성된 객체의 주소, this.no는 밑에 no
function Student(no, name, kor, eng, mat){
    var _no = no; // 외부 노출 안됨 : 캡슐화
    // this.no = no;
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
    this.avg = function (){
        return this.total() / 3;
    };
    this.toString = function(){
        return this.no + "::" + this.name + "::" + this.avg();
    }
};

let student = new Student(1, "홍길동", 90, 98, 80);
console.log(student.name);
console.log(student.no);
student.setNo(5);
console.log(student.getNo());
console.log(student.no); // 캡슐화 되어서 undefined : 함수 내 지역 변수로 캡슐화 진행, private 키워드 없음
