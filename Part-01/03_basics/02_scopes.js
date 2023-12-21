// scopes 
// {} called scopes 

let a = 100;
// const b = 20;
// var c = 30;
var c = 300; //this will not print coz js chooses last option
if(true){  
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("inner:", a);
}
// console.log(a); // not defined because let contains block scope
// console.log(b); const containers block scope
console.log(c); //var container global scope and it can be accessed anywhere 


// scopes in function 
function one(){
    let username = "dashvanth";

    function two(){
        let website = "youtube";
        console.log("in func two. username:", username ); //can access becuase lexical scope
    }
    // console.log("in func one. website:",website);//can't access the func two var because of lexical scope
    two();
}
one();

// if statement scope 
if(true){
    const username = "dash";
    if(username === "dash"){
        const website = "youtube";
        console.log(website + username);
    }
    // console.log(website); can't access due to block scope
}

// console.log(username); //can't access due to block scope


// func and func expression 
// can perform hoisting ->function declaration 
addone(9);
function addone(num){
    return num +1;
}
addNum(8);
const addNum = function(num){
    return num + 1;
}
// console.log(addNum(5)); //can't perform hoisting