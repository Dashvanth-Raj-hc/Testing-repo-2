// truthy and falsy 

// if you assume a value is true then it is a truthy value 
const userEmail = "dash.ai"//here useremail has assumed as true in if statement coz there is no comparision or operations used
if(userEmail){
    console.log("has user email.");
}else{
    console.log("doesn't have user email.");
}

const score = "";
if(score){
    console.log("score is undefined");
}else{
    console.log("score is empty string");
}

// falsy values: 
// false,0,-0,BigInt 0n, null, undefined, NaN

// except these all are truthy values 

// truthy values : true,"0","false"," ",{},[],function(){}

// how to check array is empty
const myArray = [];
if(myArray.length === 0){
    console.log("array is empty");
}

// how to check obj is empty 
const myObj = {};
if(Object.keys(myObj).length ===0){
    console.log("obj is empty");
}
