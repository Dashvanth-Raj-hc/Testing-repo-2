// classes 

// can be created using class keyword, containing a constructor function 
class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
        //creating a method
        encryptPassword(){
            return `${this.password}abc`;
        }
        // changing username (accessing variable using this) 
        changeUsername(){
            return `username : ${this.username.toUpperCase()}`
        }
}
const userOne = new user("dash","dash@gmail.com",242);
console.log(userOne);
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

Object.prototype.greetMessage = function(){
    console.log(`${this}`);
    console.log(`hi ${this.username},how are you?`);
}

userOne.greetMessage();