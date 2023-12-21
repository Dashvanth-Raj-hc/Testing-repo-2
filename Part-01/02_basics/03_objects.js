// objects can be declared in three ways 
// constructor method 
// Object.create ->it's singleton
// object literals ->not singleton

// how to add a Symbol to Object 
// [mySym] : "key1" -> add like these inside obj
const mySym = Symbol("key1");

const jsUser = {
    name :"dashvanth",
    "full Name" : "dashvanth raj",
    age : 22,
    city: "banglore",
    [mySym] : "mykey1",
    email : "dash@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["monday", "tuesday", "friday"]

}
// symbol accessing 
console.log(jsUser[mySym]);

// can access in 2 ways 
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full Name"]);

// how to add a key value pair 
jsUser.lastName = "raj";
console.log(jsUser.lastName); 

// you can freeze the obj 
jsUser.email = "dashvanthraj@gmail.com";
// Object.freeze(jsUser); //it will freeze object and no longer allow to make changes 
// jsUser.email = "boom@gmailc.com" //this will not change 
console.log(jsUser.email);
console.log(jsUser);

// can add func to obj 
jsUser.greeting = function(){
    return "hello there";
}
// console.log(jsUser);
console.log(jsUser.greeting());

// this keyword 
jsUser.greetingTwo = function(){
    console.log(`hey there ${this.name}, your email is ${this.email}`);
}
console.log(jsUser.greetingTwo());