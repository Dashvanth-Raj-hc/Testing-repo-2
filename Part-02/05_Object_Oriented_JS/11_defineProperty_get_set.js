function user(email,password){
    this._email = email;
    this._password = password;

    // is used to get and set   
    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.length;
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

const fakeEmailLength = new user("dash.ai","3240");
console.log(fakeEmailLength);
console.log(fakeEmailLength.email);

const passwordUpperCase = new user("ananya101@outbox.com","helena");
console.log(passwordUpperCase);
console.log(passwordUpperCase.password);