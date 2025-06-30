const User = {
    _email : 'h@hc.com',
    _password : "abc",




    get email() {
        return this._email.toUpperCase();
    },
    set email(value)
    {
        this._email = value;
    }
}

const tea = Object.create(User);
console.log(tea.email);

//get uses return because it returns a value.
//set does not use return because it sets a value (performs an action).
//We don’t use return because we are changing internal data, not returning anything.