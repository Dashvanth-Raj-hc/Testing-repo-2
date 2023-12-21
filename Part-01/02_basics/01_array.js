// arrays 

const marks = new Array(22,33,44,55);
console.log(marks);

const heros = ["batman", "spiderman"];
console.log(heros[1]);
console.log(heros[0][2]);

// Array method 

const numbers = [0,1,2,3,4,5];
numbers.push(6);// add eles at last
console.log(numbers);
numbers.pop()//removes eles at last

numbers.unshift(7); //add eles at first
console.log(numbers);
numbers.shift(); // removes eles at first
console.log(numbers);

console.log(numbers.includes(2));//give boolean answer

// const newNumbers = numbers.join();
// console.log(typeof newNumbers);
console.log("slice method");
console.log("A", numbers);
const newNumbers = numbers.slice(0,4); //doesn't effect original value
console.log(newNumbers);
console.log("B", numbers);

console.log("splice method");
const newNumbers2 = numbers.splice(0,4);//effects original value
console.log("A", numbers);
console.log(newNumbers2);
console.log("B", numbers);