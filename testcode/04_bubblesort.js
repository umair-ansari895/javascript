let arr = [1, 3, 5, 1, 4, 8, 3] ;
let length = arr.length;
let swapped;
    do {
        swapped = false;
        for (let i = 0; i < length - 1; i++){
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped)

        console.log(arr);