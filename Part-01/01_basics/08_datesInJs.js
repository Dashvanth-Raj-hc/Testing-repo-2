// dates in js 

const myDate = new Date();
console.log(myDate);//2023-10-15 t04:30:40.409
console.log(myDate.toString()); //sun Oct 15 2023 10:00:40 (india standard time)
console.log(myDate.toDateString());//sun oct 15 2023
console.log(myDate.toISOString()); //2023-10-14t04:30:40.309z
console.log(myDate.toLocaleDateString());//15/10/23
console.log(myDate.toLocaleString());// 15/10/23, 10:00:40am
console.log(myDate.toLocaleTimeString()); //10:00:40 am

console.log(typeof myDate);

// create own date and time 
// let myOwnDate = new Date(2023,6,9,18,0);
// let myOwnDate = new Date("2023-01-23"); //yyyy-mm--dd
let myOwnDate = new Date("07-09-23"); //mm-dd-yyyy
console.log(myOwnDate.toLocaleString());

// creating timeStamp 
let timeStamp = Date.now();
console.log(timeStamp);
console.log(Math.floor(Date.now()/1000));

// get date or time without converting date into string 
const myNewDate = new Date();
console.log(myNewDate.getDate());
console.log(myNewDate.getDay()+1);
console.log(myNewDate.getMonth()+1);

console.log(`Today's date is ${myNewDate.getDate()}, and today is a ${myNewDate.getDay()} it is a ${myNewDate.getMonth()+1} month.`);

const customisedDate = myNewDate.toLocaleString('default', {
     weekday: "long",
})
console.log(customisedDate);