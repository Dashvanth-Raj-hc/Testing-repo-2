// function -> used to perform certain task 
// console.log("dashvanth");
// console.log("dashvanth");
// console.log("dashvanth"); //wrong way 
// console.log("dashvanth");
// console.log("dashvanth");

function printMyName(){
    console.log("dashvanth");
}

printMyName();
// printMyName();  right way to use
printMyName();
printMyName();

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers(2,3)
addTwoNumbers(5,5)
addTwoNumbers(5,"a")
addTwoNumbers(5,"4")

// const result = addTwoNumbers(10,20);
// console.log(result()); not work due to clg, but it'll work in return 
function addTwo(number1,number2){
    return number1 + number2;/*this will work*/
}

const result = addTwo(20,30)
// console.log(result); will work due to return
// console.log(result());not work bcoz it's not a function

// return just stores the value but doesn't print 
function loginUser(username){
    return `${username} just logged in!`
}
loginUser("dashvanth");// only stores does not print 
console.log(loginUser("dash"));

// default value in parameter 
function sumofTwo(a=10,b=20){
    return a+b;
}
console.log(sumofTwo());//this will give 30 coz default value


// shopping cart problem . when you want to add multiple items again and again to a function you can use rest operator ...
// rest operator should be used at first 
function calculateCartPrice(...items){
    return items;
}
// wrong use of rest operator 
// calculateCartPrice(item1,...,item2)//not valid
// calculateCartPrice(item1,...)//not valid
console.log(calculateCartPrice(200,300,400,500));//rest operator stores as array

// adding function in obj called as methods 

const user = {
    user1: "ananya",
    password : 22
}
function userInfo(info){
    console.log(`username is ${info.user1} and password is ${info.password}`);
}
// userInfo(user);
// or 
userInfo({
    user1: "dash",
    password : 11
})

// function in arrays 
const scores = [200,400,500,800];

function highestScore(score){
    console.log(`the highest score is ${score[score.length-1]}.`);
}
// highestScore(scores);
// or
highestScore([200,400,600,900])

// function expression 
const companyName = function(name){
    return `the company is ${name}`;
}
console.log(companyName("tata"));

const addofTwo = function(value1,value2){
    return value1+value2;
}
console.log(addTwo(2,4));