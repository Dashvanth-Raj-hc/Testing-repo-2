// while 
let index = 0;
while(index<=10){
    console.log(`value of index is: ${index}`);
    index+=2;
}

// while in arrays 
const heros = ["ironman","thor","loki"];
let hero = 0;
while(hero<heros.length){
    console.log(`value is : ${heros[hero]}`);
    hero=hero+1;
}

// do while 
let mulTable = 2;
let number = 1;
do{
    console.log(`${mulTable} * ${number} = ${number*mulTable}`);
    number++;
}while(number<=10);