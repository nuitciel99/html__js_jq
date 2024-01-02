var value = 3 > 5 ? '3이 5보다 큽니다' : -3;
1 + 1;

// && : 둘다 참인 경우 : 앞이 참이면 뒤까지 감 >> 뒤에꺼 반환
// 앞이 거짓이면 뒤까지 안 감 >> 앞에꺼 반환
// var val = 5 && '문자열'; // && 둘 다 참, 5는 참(0이 아니면 모두 참)
var val = 0 && '문자열'; // && 둘 다 참, 0이 아니면 모두 참
console.log(val);

var age = 15;
var fee = 0;
if (age <= 7 || age >= 70) {
    fee = 0;
} else if (age <= 13) {
    fee = 450;
} else if (age <= 19) {
    fee = 720;
} else {
    fee = 1200;
} 
console.log(fee);

