// getter and setter in js 

class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    // declaring get and set 
    // you need to change var name bcoz the constructor and setter both setting the password values so error happens and call stack exceeds 
    get password(){
        return this._password.toUpperCase()
    }
    //means in get -> if someone takes value it'll be in uppercase but the normal original one will be same lower original
    set password(value){
        this._password =value;
    }

    get email(){
        return this.$email.length;
    }
    set email(value){
        this.$email = value
    }
}

const dashvanth = new user("dashvanth@gmail.com","abc");
console.log(dashvanth);//user{email: dashva@gmail.com,_password: 'abc}//its still in original value
console.log(dashvanth.password); //ABC

const getFakeEmail = new user("dash@gmail.com","hey");
console.log(getFakeEmail);
console.log(getFakeEmail.email);//14 