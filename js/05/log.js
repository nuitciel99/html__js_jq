// export function log(message){
//     console.log(message);
// };
// export function error(message){
//     console.log(message);
// };

const log = function (message){
    console.log(message);
};
function error(message){
    console.log(message);
};

export default log;
export{log, error as yourError} ;

// // export function log(message){
// //     console.log(message);
// // };
// // export function error(message){
// //     console.log(message);
// // };

// const log = function (message){
//     console.log(message);
// };
// function error(message){
//     console.log(message);
// };

// export{log, error} ;