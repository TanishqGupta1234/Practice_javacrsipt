
//var c = 3000;
let a = 300;



if (true) {
    let a = 10;
// const b = 20;
var c = 30;

    
}

// console.log(`a: ${a},  c: ${c}`); // a: 10, b: 20, c: 30


function one()
{
    const username = "John";

    function two()
    {
        const password = "1234";
        console.log(`Username: ${username}, Password: ${password}`);
    }
    // console.log(password);
    two()
}

// one();

if (true) {
 
    const username = "John";
    if (username=="John") {
        const Website = " youtube"
        // console.log(username + Website);

    }
    // console.log(Website); // ReferenceError: Website is not defined
}

// console.log(username); // ReferenceError: username is not defined



// +++++++++++++++++++++ Intresting +++++++++++++++++++++++

function addone(num)
{
   return num + 1;
}

addone(10); // 11



const addTwo = function(num){
    return num + 2;
}

addTwo(10); // 12