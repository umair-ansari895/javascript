for(let i = 1; i<=5; i++){
    let line = "";
    for(let j = 1; j<=i; j++){
        line += "*";
    }
    console.log(line);
}
for(let i = 1; i<=5; i++){
    let line = "";
    for(let j = 5; j>=i; j--){
        line += "*"
    }
    console.log(line);
}

//******************************************************************************** */

let mxn = [[1, 2, 5], [3, 5, 5]];
//let mxn = [[1,2,5],[3,5,5,5],[5,1],[6,7,5,4] ]
let mxnCount = 0;
for(let i = 0; i < mxn.length; i++){
    for (let j = 0; j < mxn[i].length; j++) {
        if(mxn[i][j] === 5){
            mxnCount++;
        }
    
    }
}
console.log(mxnCount);

// **************************************************************************

let arrForDouble = [4, 5, 1]
let doubleArr = arrForDouble.concat(arrForDouble);
console.log(doubleArr);

//************************************************************************ */

let present = [9,6,4,2,3,5,7,0,1]
let n = present.length;
let totalStudent = (n*(n+1))/2;
let presentStudent = present.reduce((a, c) => a+c, 0);
let absentStudent = totalStudent - presentStudent;
console.log(absentStudent);

//******************************************************************** */

let mxmdifarr = [1, 2, 4, 7, 11];
let mxmdiff = 0;
let mxml = mxmdifarr.length;
for(let i = 1; i < mxml; i++){
    let diff = Math.abs(mxmdifarr[i] - mxmdifarr[i-1]);
    if(diff > mxmdiff){
        mxmdiff = diff;
    }
}
console.log(mxmdiff);


//******************************************************************** */

let str = "a1e@i2o!u"
let vwlcount = 0;
const vowel = "aeiouAEIOU"
for(char of str){
    if(vowel.includes(char)){
        vwlcount++;
    }
}
console.log(vwlcount);

//************************************************************* */

const mt1 = [[1,2,5], [3,5,5]]
const mt2 = [[1,5,7], [2,1,3]]
let rows = mt1.length;
let cols = mt1[0].length;
let result = [];

for(let i = 0; i<rows;i++){
    result[i] = [];
    for(let j=0; j<cols; j++){
        result[i][j] = mt1[i][j] + mt2[i][j];
    }
}

console.log(result);

//**************************************************** */

let prefectClass = [3, 6, 7, 2, 9]
let prefectCount = 0;
for(let i = 0; i < prefectClass.length; i++){
    for(let j = i+1; j < prefectClass.length ; j++){
        if((prefectClass[i]+prefectClass[j]) % 3 === 0){
            prefectCount++
        }
    }
}

for(let i = 0; i < prefectClass.length;i++){
    for(let j= i+1; j < prefectClass.length;j++){
        for(let k = j+1; k < prefectClass.length; k++){
            if((prefectClass[i]+prefectClass[j]+prefectClass[k]) % 3 === 0){
                prefectCount++;
            }
        }
    }
}

console.log(prefectCount);
