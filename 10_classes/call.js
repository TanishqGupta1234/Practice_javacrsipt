function SetUserName(username)
{
    this.username = username;
    // console.log("called");
}

function createUser(username, email, password){
    SetUserName.call(this,username) // Using call to set the username
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "tanishq@12.com", "123")
console.log(chai);

//call() is a method in JavaScript that lets you manually set the value of this when calling a function.
// In short:
// "Call kisi function ko kisi aur object ke sath chalane ka tareeka hai."