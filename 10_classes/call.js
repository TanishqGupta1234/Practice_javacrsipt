function SetUserName(username)
{
    this.username = username
}

function createUser(username, email, password){
    SetUserName.call(this, username) // Using call to set the username
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "tanishq@12.com", "123")
console.log(chai);