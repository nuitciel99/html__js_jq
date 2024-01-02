let obj = {a:1, b:2};
obj.a;
obj['a'];

console.log(obj['a']);
obj['a'] = 20;
console.log(obj);

let c = 20; // c number
obj.c = c; // c라는 property에 20 담기
console.log(obj);
obj = {a:10, b:15, c}
console.log(obj); 

let str = 'a';
obj.str // undefined
obj[str] // obj['a']
console.log(obj[str]);

// 탐색 대상 : 객체 
console.log(typeof []); 
// in 
// 프로퍼티명 in 객체 >> boolean 
console.log('a' in obj);
console.log(str in obj);
console.log('d' in obj);

arr = [10, 20, 30];
console.log(0 in arr);
console.log(3 in arr);
console.log("=======================");
for(var i in arr){
    console.log(arr[i]);
}
console.log("=======================");
for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log("=======================");
for(var i in obj){
    console.log(i, obj[i]);
}

// 함수 생성
function myFunc(a, b){
    console.log(a+b);
}
myFunc(1, 10);

// 함수의 특징 : 단독 호출
// 메서드의 특징 : 의존 호출 

obj = {a: 10, b:"가", c:myFunc};
obj.c(10, 20); // 메서드 호출

// y = f(x)
// function

function f(x){
    return x * x;
}
let y = f(5);
console.log(y);

y = myFunc(10, 20);
console.log(y); 
// return이 없어서 undefined
function f2(x){
    console.log(x);
    return x;
}
console.log("==================");
y = f2(); // 미지정 인자는 undefined
console.log(y);

// 첫 번째만 반환
f2(10, 20, 30);
// 오버로딩 개념이 없음

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number} n1 + n2;
 */
function add(n1, n2){
    return n1 + n2;
}
add(10, 20);
