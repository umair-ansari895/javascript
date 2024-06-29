console.log("Pattern-1")
for(let j = 1; j <= 5; j++){
    let star = '';
for (let i = 1; i <= 5; i++) {
    star += '*';
}
console.log(star);
}

//**********************************************************************

console.log("pattern-2")
for (let i = 1; i <= 5; i++) {
    let star = '';
    for(let j = 1; j <= i; j++){
        star += '*';
    }
    console.log(star);
}

//**************************************************************************

console.log("Pattern-3")
for(let i = 1; i <= 5; i++){
let star = '';
for(let j = 5; j >= i; j--){
star +='*';
}
console.log(star);
}

//**************************************************************************

console.log("Pattern-4")
for(let i = 1; i <= 5; i++){
let star = '';
for(let j = 5; j >= i+1; j-- ){
    star += ' ';
}
for(let k = 1; k <= i; k++){

    star += '*'
}
console.log(star);
}

// *****************************************************************************

console.log("Pattern-5")
for(let i = 1; i<=5; i++ ){
    star = '';
    for(let k = 1; k < i; k++){
        star += ' '

    }

    for(let j = 5; j >= i; j--){
                star += '*'
    }
    console.log(star);
}