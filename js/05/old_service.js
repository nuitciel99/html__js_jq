// let oldService = {insert:function(){}, select:function(){}};

let oldService = {
    insert:function(msg){
        console.log("insert()", msg);
    }, 
    select:function(){
        console.log("select()", msg);
    }
};

oldService = (function(abcd){
    // 변수 선언 가능
    function insert(msg){
        console.log("insert()", msg);
    }; 
    function select(msg){
        console.log("select()", msg);
    };
    return {insert, select};
})(1234);
