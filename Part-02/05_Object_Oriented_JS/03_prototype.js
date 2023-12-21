// prototype ->example to understand prototype

// goal -> create a new method that gives trueLength without adding white spaces 
let myName = "dash      ";
let mylastName = "raj     ";

// console.log(myName.trueLength); //goal->need to create a new method like this
//how to create this?

let heros = ["thor","spiderman","ironman"];

let heroPower =  {
    thor : "hammer",
    spiderman : "swing",
    ironman : "ironman suit",

    // how to get spiderman power ->using this
    getSpidyPower: function(){
        console.log(`spidy power: ${this.spiderman}`);
    }
}

// how to create a new method in prototype 
// like this 
Object.prototype.dashvanth = function(){
    console.log(`dashvanth is present in all objects`);
}

// calling ->in any obj you call your dashvanth method will be present 
heroPower.dashvanth();

// checking dashvanth is present in newly created obj 
let movie = {
    language: "english",
    movieName : "hangover",
    genre: "comedy",
    rating : 8.9,

    getMovieName : function(){
        console.log(`the movie name is ${this.movieName}`);
    }
}

console.log(movie.getMovieName());
movie.dashvanth();//yes it is present in all objects

// this Object dashvanth is also present in Arrays,strings   
heros.dashvanth();//yes present

// if you create array method prototype then it doesn't have access to objects
// example: 
Array.prototype.heydash = function(){
    console.log("dashvanth says hello");
}
heros.heydash();//present
// heroPower.heydash(); //absent error


// inheritance 
// when you want to link two/three objects and share info you can usee __proto__ property
// ex : 
const teacher =  {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false,
    __proto__ : teacher //have access of teacher
}
const TAsupport = {
    makeAssigment : "js assignment",
    fulltime : true,
    __proto__: teachingSupport //have access teaching Support
}

// can use __proto__ outside also 
// teachingSupport.__proto__ = teacher;
// TAsupport.__proto__ = teachingSupport;

// new modern and used syntax 
Object.setPrototypeOf(teachingSupport,teacher);
Object.setPrototypeOf(TAsupport,teachingSupport);

// now we can solve all the trueLength problem 
let myname = "hi     ";

String.prototype.trueLength = function(){
    // you can use this to acces the string cos it is also an object
    console.log(this);  
    console.log("true length is :",this.trim().length);
}
myname.trueLength();
// can also acces like this 
"ananya".trueLength();
"suguna cs".trueLength();