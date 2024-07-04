// function chai(){
//     console.log(`db connected`);
// }
// chai()

//named iife
(function chai(){
    console.log(`db connected`);
})();

//un named iife
// (( ) => {
//     console.log(`db connected two`)
// })();

//un named iife with argument
((name ) => {
    console.log(`db connected two ${name}`)
})('umair');