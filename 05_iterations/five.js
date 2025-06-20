const coding =["JavaScript", "Python", "Java", "C++", "Ruby"];
// coding.forEach(function (val) {
//     console.log(val);

// })

// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

const myCoding = [
    {
        languageName : "javascript",
        languagefile : "js"
    },
    {
        languageName : "java",
        languagefile : "java"
    },
    {
        languageName : "pyhton",
        languagefile : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);

})