let num = 7;
let isPrime = true;

if(num <= 1){
    console.log(`${num} is not prime and not a composite`);
}else if(num > 1){
    for(i = 2; i < num; i++){
        if(num % 2 == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`${num} is prime number`);
    
    }
    else{
        console.log(`${num} is not a prime number`);
    }


}

