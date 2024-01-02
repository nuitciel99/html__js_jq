// 날짜 타입 객체 생성
let d = new Date();
console.log(d);

// getter, setter
// getFullYear
// getMonth
// getDate

// getDay

// getHours
// getMinutes
// getSeconds

// 배열 : 인덱스를 통한 값 관리
let days = ['일', '월', '화', '수', '목', '금', '토'];
// let days = new Array('일', '월', '화', '수', '목', '금', '토');
console.log(days);
console.log(days[1]);
console.log(days[10]);
days[1] = '월';

let arr = [0, false, '문자열', {}, [10, 20], function() {}, undefined]
console.log(arr[4][0]);
console.log(arr[2][0]);

console.log(days[d.getDay()] + '요일');

for (let i = 0; i < days.length; i++) {
    console.log(days[i]);    
};

// 객체 : 이름을 통한 값 관리
let obj = {a:1, b:'가', c:{a:20, b:20}};
console.log(obj.a);
console.log(obj.b);
console.log(obj.c.a);

obj.c.a = 30;
console.log(obj.c.a);
console.log(obj);

arr = [1,2,3];
arr[5] = 20;
console.log(arr);
arr.length = 2; // 상수가 아니므로 덮어 쓸수 있음
console.log(arr);

obj.d = '홍길동';
console.log(obj);

delete obj.b;
console.log(obj);

let productList = [
    {
    name : "솔의눈",
    price : 700,
    },
    {
    name : "커피",
    price : 700,
    },
    {
    name : "파워에이드",
    price : 1200,
    },
    {
    name : "오렌지",
    price : 1000,
    },
    {
    name : "보리차",
    price : 1200,
    },
    {
    name : "밀키스",
    price : 800,
    },
] 
console.log(productList[2].name);
for(let i = 0; i<productList.length; i++){
    console.log(productList[i].name, productList[i].price);
}

// 역순
for(let i = productList.length; i --; ){
    console.log(productList[i]);
}

let str = "가나다라";
console.log(str.length);

for(let i = 0; i<str.length; i++){
    console.log(str[i], str.charAt(i));
}