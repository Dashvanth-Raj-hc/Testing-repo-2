// IIFE->Immediately Invoked Function Expression
// ()->func declaration ()->func execution 
// you don't need to call the function because you're callling after function only because of globar pollution cause.

// the global scope causes some problem so we use iife to prevent the problem 

// this is called named iife (because it has name)
(function hello(){
    console.log("hello,good morning");
})();

(()=>{
    console.log("DB CONNECTED");
})();
// add semicolon at the end 

// how to pass a value in iife 
((num1,num2)=>{
    console.log(num1+num2);
})(2,4);//you can pass the argument here