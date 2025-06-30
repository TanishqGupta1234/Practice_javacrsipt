//What are get and set?
//🔍 get → read a property like a variable
//✏️ set → update/change a property with some control
// 🎯 Why use get and set?
// Hide internal logic
// Control how values are read or changed
// Add validation while setting a value
// Make object properties behave like variables
function User(email, password)
{
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email',{
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this.enail = value;
        }
    })
    Object.defineProperty(this, 'password',{
        get : function()
        {
            return this._password.toUpperCase();
        },
        set : function(value)
        {
            this._password = value;
        }

    })
}

const chai = new User("chai@chai.com", "chao")
console.log(chai.email);