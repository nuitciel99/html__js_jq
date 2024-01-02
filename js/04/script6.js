// 분해 연산 
let obj = {a:10, b:20, c:30};
let {a, b} = obj;
console.log(a);
console.log(b);

function f({a,b}){  // 분해 연산
    console.log(a, b);
};
f(obj);

function useState(str){
    return ["str", function(){console.log(str);}];
};

const [time, setTime] = useState("hi");
console.log(time);
setTime();