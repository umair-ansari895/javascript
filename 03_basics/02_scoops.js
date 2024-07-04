if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "umair"
    function two(){
        const website = "youtube"
        console.log(username); 
    }
    //console.log(website);
    two()
}
//one()

if (true) {
    const username = "umair"
    if (username === "umair") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//******************************* interesting **************************************** */
addone(5)
function addone(num){
    return num + 1
}



const addtwo = function(num) {
    return num + 2
}

addtwo(5)