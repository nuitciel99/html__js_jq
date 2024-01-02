let str = "가나다";
for(let i in str){
    console.log(str.charCodeAt(i));
}

// 문자 > 코드

// 코드 > 문자 
console.log(String.fromCharCode(65));
str = "";
for(let i = 65; i<91; i++){
    str += String.fromCharCode(i);
}

console.log(str);
// char > String 
// String str = "";
// str += ch;

let num = 10;
let f = function(){};
let obj = {x:1, y:2};
console.log(num.toString());
console.log(f.toString());
console.log(obj.toString());

// SimpleDateFormat
let d = new Date();
// 연월일 (yyyy-MM-dd)
// let result = "" + d.getFullYear() + "-"+ (d.getMonth()+1 + "").padStart(2, "0") + "-"+ (d.getDate()+1 + "").padStart(2, "0"); 
let result = d.getFullYear() + "-" + toLeadZero(d.getMonth()+1) + "-" + toLeadZero(d.getDate());
console.log(result);

function toLeadZero(number){
    return (number + "").padStart(2, "0");
};

// f(target);
// target.f();
// Math.round()
num = 1234.5678;
console.log(num.toFixed());
console.log(num.toFixed(2));

console.log(parseInt('123.456ABCD'));
console.log(parseInt('ABC123.456ABCD')); // NaN
console.log(+'123AB');

// 문자열 > 배열 split
// 배열 > 문자열 join

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.toString());
console.log(fruits.join('!'));

// 배열 추가, 제거 
// push, pop
// unshift : 0번 위치에 추가, shift : 0번 위치 삭제 (반환)

result = fruits.push("Berry");
result = fruits.push("Berry");
console.log(fruits, result);  // 변경 후 길이가 나옴
result = fruits.pop();
console.log(fruits, result); // 빠진 값이 나옴 
result = fruits.shift();
console.log(fruits, result);
result = fruits.unshift("melon");
console.log(fruits, result);

result = fruits.splice(2, 1, "Lemno", "Kiwi");
console.log(fruits, result); // 제거된 값 반환 

// function remove(idx, arr){
//     arr.splice(idx, 1);
// }
// remove(3, fruits);
Array.prototype.remove = function(idx){
    this.splice(idx, 1);
}
fruits.remove(3);
console.log(fruits);

fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
// list.add(item)
// list.remove(list.size()-1) // pop
// list.remove(item) // boolean : 지워졌으면 false 

let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {return -(a-b)});
console.log(points);

// let f1 = function(a, b){
//     console.log("f1()", a, b);
// };
// // arrow function : lambda expression
// let f2 = (a, b) => { 
//     console.log("f2()", a, b);
// };

let f1 = function(a){
    console.log("f1()", a);
};
// arrow function : lambda expression
let f2 = (a) => console.log("f2()", a);
f1();
f2();