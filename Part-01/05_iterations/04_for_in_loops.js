// for in loops 
const extensions = {
    c : "c-programming",
    cpp : "c++",
    js : "javascript",
    py : "python"
}

// for in loop is used to iterate objects and others also
for(const extensionName in extensions){
    // console.log(extensions[extensionName]);to access values
    // console.log(extensionName);to access keys
    console.log(`${extensionName} : ${extensions[extensionName]}`); //to access both key and values 
}

// for in loop in arrays 
const bigBangTheory = ["sheldon","leonard","raj","penny"];

// you can't access directly values of arrays it gives it's length so we use [];
// ex: 
for(const characters in bigBangTheory){
    console.log(`the characters are: ${bigBangTheory[characters]}`);
}

// maps are not iterable in for in 
// for in loop in map
// map is not iterable in for in loop so it can't display anything
// const friends = new Map();
// friends.set("1","chandler");
// friends.set("2","monica");
// friends.set("3","rachel");

// // for in loop 
// for(const [values,characters] in friends){
//     console.log(values, characters);
// }