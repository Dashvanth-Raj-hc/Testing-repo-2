// Object based syntax get and set 

const user =  {
    email: "dash@google.com",
    _password : "khiladi",

    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password = value;
    }
}
const fakeEmail=Object.create(user);
console.log(fakeEmail);
console.log(fakeEmail.password);