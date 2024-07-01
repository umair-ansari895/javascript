//const tinderUser = new Object(); // singleton object
const tinderUser = {}; // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullName:{
        userFullName: {
        firstName: "umair",
        lastName: "ansari"
        }
    }
}

//console.log(regularuser.fullName.userFullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "u@ansari.com"
    },
    {
        id: 1,
        email: "u@ansari.com"
    },
    {
        id: 1,
        email: "u@ansari.com"
    },
    {
        id: 1,
        email: "u@ansari.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ************************************************************

const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "umair"
}

//course.courseInstructor


//object destructured

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// json

// {
//     "name": "umair",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]