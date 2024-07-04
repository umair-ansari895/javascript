let account = [[2,3,1], [3,4,2,1], [2,5,6,1,2]]
let maxWelth = 0

for (let i = 0; i < account.length; i++) {
    let currentWelth = account[i].reduce((a, c) => a + c, 0)
    //console.log(currentWelth);
    if(currentWelth > maxWelth){
        maxWelth = currentWelth;
        
    }
}

console.log(maxWelth);