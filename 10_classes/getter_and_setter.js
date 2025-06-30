// getter and setter in JavaScript
// Getter and Setter are special methods that allow you to define how properties of an object should be accessed and modified.
// They are used to control access to an object's properties, allowing you to add logic when getting or setting a value.
//// In JavaScript, you can define getters and setters using the `get` and `set` keywords within a class or an object literal.



class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email()
    {
        return this._email.toLowerCase();
    }
    set email(value)
    {
        this._email = value;
    }
    get password()
    {
        return this._password.toUpperCase();
    }
    set password(value)
    {
        this._password = value;
    }


}

const tanishq = new User("tanishq@c.com", "tanishq123");
console.log(tanishq.password);