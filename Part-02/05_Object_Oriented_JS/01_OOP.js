//  Parts of OOP 
// Object Literal 
// constructor function
// prototype
// classes 
// Instance (keywords like new and this);


// Object literal ->same like normal obj but contains methods 
const user = {
    username: "dashvanth",
    loginCount:8,
    isSignedIn: true,

    userDetails : function (){
        console.log(`Username:${this.username},and the no of times logged in :${this.loginCount}`);
    }
}
console.log(user.userDetails());


// constructor function 
// const promiseOne = new Promise();
// the new keyword is a constructor function 

// problem : what if we do not use new keyword ? ans: the second variable value paramters ovverides the values so we use 'new' coz it creates new instance
function User(username,loginCount,isSignedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isSignedIn = isSignedIn;
    // here this refers to current context which is parameter passing value becoz ***function is also an object***
    return this;
    //here this return all the values
}

const userOne = User("dashvanth",6,false);
const userTwo = User('ananya',2,true); //here usertwo overrides userone values so we use new keyword coz it creates new instance 
// using new 
const userThree = new User("arun",6,false);
const userFour = new User('priya',2,true); 
console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userFour);


// constructor functino gives new instance or copy and you can call as much as values assigning to a var 
