// for of loop 

const numbers = [1,2,3,4,5];
for(const number of numbers){
    console.log(number);
}

// for of loop in strings 
const firstName = "dashvanth";
for(const namecharacters of firstName){
    console.log(namecharacters);
}

const greetings = "hello world!";
for(const greet of greetings){
    if(greet == " "){
        continue;
    }
    console.log(greet);
}


// map 
const shortForm = new Map();
shortForm.set("IN","India");
shortForm.set("UK","united kingdom");
shortForm.set("kr","korea");

// for of loop for maps (imp)
// maps->stores key values in order and they shouldn't be repeated 
for(const [key,value] of shortForm){
    console.log(key,":-",value);
}

// for of in objects 
const userInfo = {
    user1: "dashvant",
    user2: "priya",
    user3: "ananya"
}

// Object can't be iterated like these 
for(const [userId,name] of userInfo){
    // console.log(userId ,":-", name);
}