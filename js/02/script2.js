let num = 10;
console.log(++num);
// num : 11
console.log(num++);
// num : 12

// 타입 간 형 변환 
// ex) in java : long > int     (int)

// 기본 타입간 변환 
// 문자 > 숫자
// 문자 > 논리 
// 숫자 > 문자
// 숫자 > 논리
// 논리 > 문자
// 논리 > 숫자

// 명시적 타입 변환 : 해당 타입의 생성자 함수의 인자로 호출
// ex) let x = true; let y = Number(x); 

// in java : true + ""
// var y = Number(x);
// var y = x*1;
// var z = String(x);
var x = false;
var y = -(-x);
var z = x + "";
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// 논리 평가식
// 문자는 빈문자열이 false
// 숫자는 0 false
// 객체는 null만 false, null이 아니면 주소가 있다. == true
// undefined : always false

var a = !!z;
console.log(a, typeof a);

// false인 경우 숙지
console.log(!!NaN);
console.log(!!0);
console.log(!!-1);
console.log(!!2);

if(NaN){

}

// infinity : 양의 무한대, 음의 무한대 
console.log(3/0);
console.log(-3/0);
console.log(0/0);

console.log(-Infinity == -3/0);

// isFinite : 끝이 있냐 없냐
console.log(isFinite(-Infinity));
console.log(isFinite(Infinity));
console.log(isFinite(3));

// undefined : type도 없음
// null : object type, 참조 대상(주소)가 없는 객체, object type은 null만 false

console.log(null, typeof null);
console.log(undefined, typeof undefined);

var str = "123"; // string
var str2 = new String("123"); // object

console.log(str == str2);
console.log(str === str2); // 타입 비교 

str.substring(1, 3);
str2.substring(1, 3);

// JS는 모든 데이터를 객체로 관리 
{
    {
        {

        }
    }
};

let obj = {};
[{}];