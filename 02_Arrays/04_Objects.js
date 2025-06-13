// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abs";
tinderUser.name = "John";
tinderUser.isLoggedIn = false; 


// console.log(tinderUser);


const regularUser ={
    email : "some@gamil.com",
    fullName: {
        userfullname: {
            firstname : "John",
            lastname : "Doe"
        }
    }
}


// console.log(regularUser.fullName?.userfullname.firstname);

const obj1 = {
    1: "one",
    2: "two",
}

const obj2 ={
    3 : "three",
    4: "four",
}

// const obj3 = Object.assign({},obj1, obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const user = [
    {
        name : "John",
        age: 30,
        email : "tanshs@gmail.com"
    
    }
]

// user[1].email // console.log(user[1]?.email); // undefined, no error
// console.log(Object.keys(user)); // ['name', 'age', 'email']
// console.log(Object.values(user)); 
// console.log(Object.entries(user)); 
// console.log(tinderUser.hasOwnProperty("name")); // true


const course = {
    coursename : "js hindi",
    price : "999",
    courseInstructor : "Tanishq",
}

// course.courseInstructor

const {courseInstructor : instructor} = course; // destructuring assignment

// console.log(courseInstructor);
console.log(instructor); // Tanishq

// const navbar = ({company}) =>{

// }

// navbar(company = "tanishq");

// {
//     "name": "Tanishq",
//     "course": "JavaScript",
//     "price": "free",
// }
[
   {},
   {},
   {} 
]