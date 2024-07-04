const user = {
    userName: "umair",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.userName = "ansari"
// user.welcomeMessage()

//console.log(this);

// function chai() {
//     let username = "umair"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "umair"
//      console.log(this.username);
// }

// chai();

const chai = () => {
    let username = "umair"
     console.log(this);
}

//chai();

// const addTwo = (num1, num2) => {
// return num1 + num2
// }
// console.log(addTwo(3, 4))

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "umair"})

    console.log(addTwo(3, 4))