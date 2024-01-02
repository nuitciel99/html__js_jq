console.log(Math.min(1, 10, 3, -3));
function f(...a){
    // console.log(typeof a, a);
    return a.reduce((a, b) => a + b, 0); // 배열이기 때문에 가능, 밑에서는 reduce 불가 : 타입이 다르기 때문
};
console.log(f(10, 20, 30));
// var > let
// es6 기준
function sum(){
    console.log(typeof arguments, arguments); // 객체 : 중괄호 블럭
    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    return sum;
};
console.log(sum(10, 20, 30)); 

// lotto 
let lotto = new Set();
for(let i = 0; lotto.size < 6; i++){
    lotto.add(parseInt(Math.random() * 45 + 1));
};
console.log(lotto);