let arr = [[1, 2, 3], [2, 4, 1, 5], [3, 2, 4]]

console.log(arr.length);

for(let i = 0; i < arr.length; i++)
{
console.log(arr[i]);
//console.log(arr[i].length);
for(let j = 0; j < arr[i].length; j++){

    console.log(arr[i][j]);
}

}