let arr = [4, 1, 5, 8, 3, 2, 6]
let length = arr.length

for (let i = 1; i < length; i++){
    let numToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsert) {
        arr[j + 1] = arr[j];
        j = j - 1; 
    }
    arr[j + 1] = numToInsert;
}

console.log(arr);