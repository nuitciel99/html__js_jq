// XMLHttpRequest
// xml http request
// xml, json, text

const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('POST', '/post');
xhr.setRequestHeader("content-type", "application/json");
const date = {
    id : 2,
    title : "xhr",
    author : "jeremy"
};