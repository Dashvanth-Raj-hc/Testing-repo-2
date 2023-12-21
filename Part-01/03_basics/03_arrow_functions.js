// arrow functions ()=>{}

// this keyword 
const user = {
    username: "dashvanth",
    price: 999,

    welcomeMessage : function(){
        console.log(`hi ${this.username}, thanks for purchasing and welcome to the website.`);
        console.log(this); //refers to current context
    }//this keyword only works on func declaration not on arrow func
}
user.welcomeMessage();
user.username  = "arun";
user.welcomeMessage();
// console.log(user.welcomeMessage()); gives undefined coz you print func again after calling so


// this is normal function without invoking 
function hello(){
    const firstName = "dash"
    console.log(this);//undefined
    console.log(this.firstName);
}
hello();


// arrow functions 

const sumofTwo = (num1,num2)=>{
    return num1+num2;
}
const userDetails = ()=>{
    const user1 = "dashvanth";
    console.log(this);
    console.log(this.user1);
}
// making arrow smaller
const greet = ()=>console.log("hello"); 
// const subtractNum = (num1)=>num1-1;
const subtractNum = (num1)=>(num1-1); //this style mostly used in react 
console.log(subtractNum(5));

// arrow func used in looping and other things etc..
// const myArrays = [2,4,5,3,3];
// myArrays.forEach(()=>{
//     console.log();
// })