function grade(score){
    if(score <= 50){
        console.log("D")
    }
    else if(score > 50 && score < 60){
        console.log("C");
    }
    else if(score > 60 && score < 75){
        console.log("B");
    }
    else{
        console.log("A");
    }
}

grade(98);