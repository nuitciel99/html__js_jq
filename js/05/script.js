// XMLHttpRequest
// xml http request
// xml, json, text

const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('POST', '/posts');
xhr.setRequestHeader("content-type", "application/json");
const date = {
    id : 2,
    title : "xhr",
    author : "jeremy"
};

// http method : 9가지 : Get (요청 : select),    Post : insert,     Put, Patch : update 

// 웹 프로그램
// cs
// request : 요청 / client
// response : 응답 / server : 대기 상태

// xhr.open("GET", "/posts");
// 사전 정보 

// request header
// response header
// 404 not found

// abcd.ppt

// image/png
// text/xml
// text/plain
// applicatin/json

// 멀티 스레드 : 멀티 작업, 분할 작업, 
// 싱글 스레드 : 한 프로그램만 실행 가능 => 멀티 불가 
// 비동기 : 모두 전송 : 뭘 먼저 받을지 모름 : 멀티 스레드와 유사
// 동기 : 요청-응답 : 화면 전환으로 보여짐, 싱글 스레드와 유사
