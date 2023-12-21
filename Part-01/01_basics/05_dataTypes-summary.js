// dataTypes summary (interview perspective)

// primitive 
// types : string,Number,Boolean,null,undefined,Symbol,BigInt   

const score = 234;
const piValue = 3.14;

const temperature = null;
let itemList;
const isLoggedIn = false;
const firstName = "dash";

const uniqueId = Symbol('132');
console.log(typeof uniqueId);

const bigNumber = 23423n;
console.log(typeof bigNumber);

// #reference type (non primitive)
// types: arrays,objects,functions 

// Arrays 
const marks = [98,99,89.39];
console.log(marks[0]);
console.log(marks);
console.log(typeof marks);

// Objects 
const userDetails = {
    firstName: "dashvanth",
    lastName: "raj",
    age: 22,
    city: "banglore"
}
console.log(userDetails.firstName);
console.log(userDetails.age);
console.log(typeof userDetails);

// functions 
const sumOf2 = function(a,b){
    return a+b;
}
console.log(sumOf2(10,20));
console.log(typeof sumOf2);


const users = ['dashvanth', "ananya", "priya"]
console.log(typeof users);


// ===========================
// about memory types 

// 1. stack memory , 2. heap memory 

// stack ->original value is not affected 
let userName = "dashvanth";
let alterUserName = userName;
console.log(alterUserName);
alterUserName = "dash";
console.log("altered username", alterUserName);
console.log("original name", userName);


// heap ->if dupliate value change then orginal value also change(which means duplicate value effects original)

let programmingLang = ["c++", "java", "c", "python"];
let programmingLang2 = programmingLang;
programmingLang2[0] = "english";
console.log("original value",programmingLang);
console.log("duplicate value", programmingLang2);