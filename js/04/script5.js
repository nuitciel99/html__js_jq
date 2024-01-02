// object > json string
let obj = [
    {no : 1, name : '김길동'},
    {no : 2, name : '홍길동'},
    {no : 3, name : '이길동'},
];

let ret = JSON.stringify(obj);
console.log(typeof ret, ret);

// json string > object
let o = JSON.parse(ret);

console.log(o);

let kakaoStr = `{
    "meta": {
      "total_count": 4,
      "pageable_count": 4,
      "is_end": true
    },
    "documents": [
      {
        "address_name": "전북 익산시 부송동 100",
        "y": "35.97664845766847",
        "x": "126.99597295767953",
        "address_type": "REGION_ADDR",
        "address": {
          "address_name": "전북 익산시 부송동 100",
          "region_1depth_name": "전북",
          "region_2depth_name": "익산시",
          "region_3depth_name": "부송동",
          "region_3depth_h_name": "삼성동",
          "h_code": "4514069000",
          "b_code": "4514013400",
          "mountain_yn": "N",
          "main_address_no": "100",
          "sub_address_no": "",
          "x": "126.99597295767953",
          "y": "35.97664845766847"
        }
      }
    ]
  }
`;
obj = JSON.parse(kakaoStr);
// console.log(obj);

// JSON, js Object
// 1. key ""로 래핑
// 2. 사용가능한 데이터 타입 : 문자열, 숫자, 불린, 객체, 배열, null 
console.log(obj.documents[0].address.address_name);
// window browser
// console.log(window);

let person = {
  firstName : "Jeremy",
  lastName : "Go"
}
let getFullName = Symbol("getFullName");

let test = Symbol("getFullName");
person[getFullName] = function(){
  return this.firstName + " " + this.lastName;
};

console.log(person[getFullName]());
console.log(person);

for(let i in person){
  console.log(person[i]);
};

console.log(getFullName == test);
console.log(typeof getFullName);

o = {a : 10, b : 20, c : function(){ return this.a + this.b }};

let f1 = function(num = 10){ // 디폴트 파라미터 
  console.log(num);
};
f1(20);
f1();
let f2 = function(num){
  num = num || 10;  // 거짓(undefined)이면 오른쪽으로 감, 즉 undefined일 때 값을 가짐
  console.log(num);
};

f2(0); // 0은 거짓

// && || 

let a = "A";
let b = "B";
o = {a:a, b:b};

obj = {[a] : ''}
console.log(obj); // react에서 꽤 씀

obj = {a, b};
console.log(obj);

let arr = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

let arr3 = arr.concat(arr2);
console.log(arr3);

arr3 = [10, ...arr, 20, ...arr2];
console.log(arr3); // 쓰기 편함

let str = "abcd"
let o2 = {...o, c : 20, ...str}; // index = key
// str.split("");
arr4 = [...str];
console.log(o2); // 쓰기 편함

