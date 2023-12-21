// strings 

const name = "dashvanth";
const myRepoCount = 12;

console.log(`hi, my name is ${name.toUpperCase()}, my repo count is ${myRepoCount}`);

// another way to declare string 
const gameName = new String("hill climb racing");
console.log(gameName);//[String: 'hillclimbracing']

// string methods 

console.log(gameName.length);
console.log(gameName[0]);

console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("c"));

const newString = gameName.substring(0,5);
console.log(newString); //hillc
console.log(gameName);

const anotherString = gameName.slice(-15,6);
console.log(anotherString);

const username = "          dashvanth       ";
console.log(username.trim());//"dashvanth"

const website = "https://dashvanth%20raj%20/linkedin.com";
const replacedWebsite = website.replace("%20","-")
console.log(replacedWebsite);

console.log(website.includes("dashvanth"));

console.log(gameName.split(' '));
console.log(gameName);