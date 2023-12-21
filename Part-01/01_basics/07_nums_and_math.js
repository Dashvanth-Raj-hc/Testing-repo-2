// nums and math 

// nums 
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);//[Number:100]->this will give some methods when we convert it to string

console.log(balance.toString().length);
console.log(balance.toFixed(4));//gives 0's ex:100.0000

const boilingPoint = 10.8;
console.log(boilingPoint.toPrecision(2));

//converting 100000 t0 1,00,000;
const oneLakh = 100000;
console.log(oneLakh.toLocaleString('en-IN'));

// ========================

// maths 
// Math->is predefined library in js which holds multiple methods like random,floor,ceil etc...

console.log(Math);
console.log(Math.PI);
console.log(Math.random());
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.3));
console.log(Math.sqrt(8));
console.log(Math.min(2,4,5,6,498));
console.log(Math.max(32,532,6,235));

console.log(Math.random());//gives random no. between 0 and 1;
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

// if you want random no. between values
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1) + min));
console.log(Math.random() * (20-10+1) + 10);