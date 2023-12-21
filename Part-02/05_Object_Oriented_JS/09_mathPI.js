// how can we convert const math.pi value (interview question)

// Object has many hidden details 
Object.getOwnPropertyDescriptor(Math, "PI");//this give full details about a particular property 

console.log(Math.PI);
Math.PI = 5;//can't be changed
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// output 
// writable -false means you can't change it 
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

class user{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    getUsername(){
        
        console.log(`username is :${this.username}`);
    }
}

const userOne = new user("dash",32432);
console.log(userOne);
userOne.getUsername()

// const userTwo = Object.getOwnPropertyDescriptor(user,"getUsername") //not valid. only works on object
// console.log(userTwo);not valid
// we can create our own descriptor propties like writable ,enumerable,configurable using defined property


let phone ={
    modelname: "realme",
    price : 19999,
    androidVersion : 11,

    // when you iterate,it'll show whole function so we use if cond 
    extraDetails: function(){
        console.log("released in 2019");
    }
}

console.log(Object.getOwnPropertyDescriptor(phone,"modelname")); //valid way
// in for of loop  Object is not iterable so we can use Object.entries(phone)
for(let [key,value] of Object.entries(phone)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
// if cond is for not including the method 


// for(let key in phone){
//     console.log(key);
// }

// getting descriptor of own 
Object.defineProperty(phone,'modelname',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(phone,'modelname'));