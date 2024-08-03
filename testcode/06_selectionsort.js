let arr = [8, 6, 2, 9, 0, 1, 5, 3]
let length = arr.length;
for (let i = 0; i < length; i++){
    let idxOfMin = i;
    for (let j = i; j < length; j++){
        if (arr[j] > arr[idxOfMin]) {
            idxOfMin = j;
        }

    }
    if (idxOfMin !== i) {
        const temp = arr[idxOfMin];
        arr[idxOfMin] = arr[i];
        arr[i] = temp;
    }

}

console.log(arr);