// conversion operation 

// number conversion 
let score = "33";

console.log(typeof score);
console.log(typeof(score));

const valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(typeof(valueInNumber));


// Boolean conversion 
const isLoggedIn = 1;
const booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

let isLoggedIn2 = "";
const isLoggedIn3 = "dashvanth";
booleanIsLoggedIn2 = Boolean(isLoggedIn2)
booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn2);//false
console.log(booleanIsLoggedIn3);//true


// String Conversion 
let age = 33;
let stringAge = String(age);
console.log(stringAge); //converted successfully
console.log(typeof stringAge); //string
let name = true 
let stringName = String(name);
console.log(typeof stringName); //string
console.log(stringName); //"true"
/*
number converting
"33" ->33
"33abc"->NaN
null->0
undefined->NaN
true->1
======================
boolean converting
1->true, 0->false
""->false
"dashvnath"->true
*/



// ************* Operations **************

let value = 3;
let negValue = -value;
console.log(negValue); //-3

console.log(2+2); //4
console.log(2-2);//0
console.log(2*4);//8
console.log(2**3);//8
console.log(2/3);//1
console.log(2%2);//1

// concating string using + 
const firstName = "dashvanth";
const lastName = " raj";
const fullName = firstName + lastName;
console.log(fullName);

console.log("causing problems");
console.log("1" + 1); //"11"
console.log(1 + "1"); //"11"
console.log("1" + 1 + 1);//"111"
console.log(1 + 1 + "1");//"21"

// console.log(3 + 5 * 4 % 3); bad way to write code
console.log((3+5 * (4 % 3)));


// + converts string or any type to number type 
console.log( typeof +true); //number
console.log(+"");
console.log(typeof +"dashvanth");

let gameCounter = 100;
gameCounter++; //values increments after usage
++gameCounter; //value increments before usage
console.log(gameCounter);

let a = 3;
let b = a++ // b = 3
// b = ++a //b=4
