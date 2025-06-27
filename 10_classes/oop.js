const user = {
    username: 'hitesh',
    loginCount: 32,
    signedIn: true,


    getUserDetails: function()
    {
        // console.log("got details of user"); 
        // console.log(`User ${this.username} has logged in ${this.loginCount} times`);
    }
}  // these are the object literals
// Object literals are used to create objects in JavaScript
// Object literals are a way to define objects using a simple syntax
console.log(user.username); // hitesh

function User(username, loginCount, IsLoggedIn) {
    this.username= username;
    this.loginCount = loginCount;
    this.signedIn = IsLoggedIn;

    return this; // this is not necessary, but it is a good practice to return this
}

const userOne =new User("hitesh", 32, true);
const userTwo = new User("tanishq", 12, false); // using the new keyword to create an instance of the User class
console.log(userOne); // User { username: 'hitesh', loginCount: 32, signedIn: true }

//this ka matlab hota hai – "ye object"
//Jo bhi object function ko call kar raha hota hai, this usi ko point karta hai.
//An instance is a copy of an object created from a class or constructor function.
//It means you create a real object using a blueprint (like a class or function). That real object is called an instance.