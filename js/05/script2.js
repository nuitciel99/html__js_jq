// import { log } from "./log";
// log("hi");

// 정규식.exec(문자열)
// 문자열.match(정규식)
let str = "ab, cd, e";
str.split(/,/);
str.split(",");

console.log(str.match("a")[0]); 
console.log(str.match("f")); 

let reg1 = /[A-Za-z]/g;
let reg2 = /\D/g;
let reg3 = /[^0-9]/g;

str = "가";

console.log(reg1.test(str));
console.log(reg2.test(str));
console.log(reg3.test(str));

// 전화 번호 
// 0XX - XXXX - XXXX
// 0X - XXX - XXXX
// asdf-asdf.asfd@asdf.
let regExpTel = /0\d{1,2}-\d{3,4}-\d{4}/; 
// let regExpEmail = /[\w\-\.]@[\w\-\.]+/g; 
let regExpEmail= /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

let tel1 = "010-1234-5678";
let tel2 = "02-1234-5678";
let tel3 = "02-234-5678";

console.log("==========================");
console.log(tel3.match(regExpTel));
console.log(regExpTel.test(tel1)); 
console.log(regExpTel.test(tel2)); 
console.log(regExpTel.test(tel3)); 

let email1 = "abc@abc.ab";
let email2 = "abc.abc";
let email3 = "ab@abcd.abca";

console.log(regExpEmail.test(email1));
console.log(regExpEmail.test(email2));
console.log(regExpEmail.test(email3));
console.log(email3.match(regExpEmail));