// if 
const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("user has been successfuly logged in.");
}

if(2=="2"){
    console.log("executed becoz == checks only value not type");
}

const score = 200;
if(score > 100){
    const power = "fly";
    console.log(`user power: ${power}`);
}else{
    console.log("power is less");
}

// shorthand of if (not using {})
const balance = 1000;
if(balance>500) console.log("high balance");

const marks = 90;
if(marks > 80){
    console.log("first class");
} else if(marks > 60){
    console.log("second class");
} else if(marks > 35){
    console.log("pass");
} else{
    console.log("fail!");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("logged in successfully.");
}