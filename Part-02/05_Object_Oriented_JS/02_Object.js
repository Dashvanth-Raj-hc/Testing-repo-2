// Object 
// function->is also an Object. and can adde propeties/methods
// function is function and also an Object 
function multipleBy5(num){
    return num*5;
} 

multipleBy5.power=2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}
// creating new function using prototype to access createUser parameter/variables 
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printScore = function(){
    console.log(`score is :${this.score}`);
}
// add new keyword ->  it shows which is the current context to add the prototype function
const userOne = new createUser("dash",5);
const usertwo = createUser("ananya",3);
userOne.printScore();
// can access / call methods like this 
// same below like this -> myarray.map()


// notes 
/*

*/