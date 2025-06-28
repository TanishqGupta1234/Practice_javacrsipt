//es6

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password} abc`;
  }
  changeUserName() {
    return `${this.name.toUpperCase()}`;
  }
}

const chai = new User("tanishq", "tanishq@gmail.com", "1234");
console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// behind the secenes
