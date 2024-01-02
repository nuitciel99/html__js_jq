// callback function : 파라미터로 전달되는 함수

function f(){
    console.log("메세지");
};

let f2 = f;
f2();

let f3 = function(callback){
    typeof callback === 'function' && callback();
}

f3(function(){
    console.log("익명 함수");
})

console.log("===================================");

function outer(){
    let str = "abcd";
    function inner(){
        console.log("inner()");
        return str;
    }
    return inner;
}
console.log(typeof outer);
console.log(typeof outer());
outer()();

console.log("===================================");

let person = new Object();
person.name = 'john';
person.age = 27;
person.home = 'seoul';
person.getperson = function(){
    return this.name + " " + this.age;
}
console.log(person);
console.log(person.getperson());

console.log("===================================");

let str = "ABCDEabcdeABCDE";

console.log(str.slice(2, 4));
console.log(str.substring(2, 4));
console.log(str.replace(/A/, 'Z'));
console.log(str.replace(/A-C/, 'Z'));
console.log(str.replace(/A/g, 'Z'));
console.log(str.replace(/[A-C]/g, 'Z'));

console.log("===================================");

let str2 = "가나다";
for(let i in str2){
    console.log(str2.charCodeAt(i));
}

console.log("===================================");

console.log(String.fromCharCode(65));

console.log("===================================");

str = "";
for(let i = 65; i<91; i++){
    str += String.fromCharCode(i);
}
console.log(str);

console.log("===================================");

let d = new Date();

let result = d.getFullYear() + "-" + getZero(d.getMonth() + 1) + "-" + getZero(d.getDate() + 1);

function getZero(number){
    return (number + "").padStart(2, "0");
}

console.log(result);

console.log("===================================");

let num = 1234.5678;
console.log(num.toFixed());
console.log(num.toFixed(2));

console.log("===================================");

console.log(parseInt('123.456ABC'));
console.log(parseInt('ABC123.456ABC'));
console.log(parseInt(+'123.456'));
console.log(parseInt(+'123.456ABC'));

console.log("===================================");

let fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits);
console.log(fruits.toString());
console.log(fruits.join('!'));

console.log("===================================");

result = fruits.push("Berry");
console.log(fruits, result);  // 배열과 길이 반환
result = fruits.pop();
console.log(fruits, result);  // 배열과 마지막 값 제거 후 반환
result = fruits.shift();
console.log(fruits, result);  // 0번째 요소 제거, result는 제거 요소 반환 
result = fruits.unshift("Melon");
console.log(fruits, result);  // Melon을 0번째에 추가, result는 length 반환

result = fruits.splice(2, 1, "Lemon", "Kiwi"); // index 2부터 1개만 제거
console.log(fruits, result);

console.log("===================================");

// fruits의 요소 제거 함수 
// function remove(idx, arr){
//     return arr.splice(idx, 1);
// };
// remove(3, fruits);
// console.log(fruits);

console.log("===================================");

Array.prototype.remove = function(idx){
    return this.splice(idx, 1);
};
fruits.remove(2, 1);
console.log(fruits);

console.log("===================================");

let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return (a-b)});
console.log(points);
points.sort(function(a, b) { return -(a-b)});
console.log(points);

console.log("===================================");

let students = [];
students.push({no : 1, name : '홍길동', score : 80});
students.push({no : 2, name : '김길동', score : 60});
students.push({no : 3, name : '이길동', score : 60});
students.push({no : 4, name : '박길동', score : 90});

result = students.filter(function(a){
    return a.score > 70;
});
result = students.filter(elem => elem.score > 70);
console.log(result);
result = students.filter((elem, idx) => idx % 2);
// result = students.filter(() => idx % 2);
console.log(result);

result = students.filter(elem => elem.name.startsWith("김"));
console.log(result);

console.log("===================================");

result = students.map(function(elem) { return elem.name + " " + elem.score});
result = students.forEach(function(elem){
    console.log(elem.name);
});
result = students.find(function(elem) { return elem.score == 60 });
result = students.some(function(elem){ return elem.score >= 70});
console.log(result);
result = students.every(function(elem){ return elem.score >= 70});
console.log(result);

console.log("===================================");

let arr = [1, 2, 3, 4, 5];

// 1. 모든 수의 제곱한 결과의 배열 
result = arr.map(function(elem) { return elem * elem });
console.log(result); 
console.log("===================================");
// 2. 홀수의 제곱한 결과의 배열
result = arr.filter(function(elem){return elem % 2 == 1}).map(function(elem){ return elem * elem});
console.log(result);
result = arr.map(function(elem){return elem % 2 == 1}).map(function(elem){ return elem * elem});
console.log(result);
// 3. 제곱한 결과가 10이상인 수의 배열 
result = arr.filter(function(elem){ return (elem * elem) >= 10}).map(function(elem){ return elem});
console.log(result);
// 4. 제곱한 결과가 10이상인 수를 담은 배열(제곱한 결과값을 담아라) 
result = arr.map(function(elem){ return (elem * elem) }).filter(function(elem){ return elem >= 10});
console.log(result);
// 5. reduce 메소드를 활용해 점수 평균 구하기 (위에 students 배열 활용)
result = students.reduce(function(a, b){
    console.log(a); // 점수 누적 합 로그 확인
    return a+b.score;
}, 0); // 0 : 초기값 설정 : 0부터 누적합
console.log(result, result / students.length);
console.log("===================================");
result = students.reduce(function(a, b){
    console.log(a); // 점수 누적 합 로그 확인
    return a+b.score;
}, 1); // 1 : 초기값 설정 : 1부터 누적합
console.log(result, result / students.length);

result = arr.filter(function(elem){return (elem * elem) >= 10});
console.log(result);
result = arr.map(function(elem) { return (elem * elem) >= 10 });
console.log(result);

console.log("===================================");