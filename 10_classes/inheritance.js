class User {
    constructor(username)
    {
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username); // Call the parent class constructor
        this.email = email;
        this.password = password;
     
    }
    addCourse(courseName){
        console.log(`Course ${courseName} added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "1234");
console.log(chai);
const masalaChai = new User("masalaChai");