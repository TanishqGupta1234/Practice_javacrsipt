const coding =["JavaScript", "Python", "Java", "C++", "Ruby"];
// coding.forEach(function (val) {
//     console.log(val);

// })

coding.forEach( (item) => {
    console.log(item);
})


function printMe(item){
    console.log(item);
}

coding.forEach(printMe);