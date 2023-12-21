
// const tinderUser =  new Object();   //same but singleton object
const tinderUser = {} //same but non singleton obj

tinderUser.id = "123abc";
tinderUser.name = "sheldon";
tinderUser.isLoggedIn = false;

// can add obj inside obj 
const regularUser = {
    email : "234@gmail.com",
    fullName : {
        userFullName : {
            "first name" : "dashvanth",
            "last name" : "raj"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName["first name"]);


// concating two objs 
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// 1 way 
// const obj3 = {...obj1, ...obj2}
// 2 way 
const obj3 = Object.assign({}, obj1, obj2); 
console.log(obj3);
console.log(obj3[3]);


// database objects will come like this in arrays 
const users = [
    {
        id : 1,
        email : "dash@gmail.com"
    },
    {
        id : 2,
        email : "dash@gmail.com"
    },
    {
        id : 3,
        email : "dash@gmail.com"
    },
    {
        id : 4,
        email : "dash@gmail.com"
    }
]

// how to access 
console.log(users[0]);
console.log(users[users.length-1]);

// how to get keys and values of obj 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));



// objects destructuring 

const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructor : "dashvanth"
}

const {courseName, courseInstructor: Instructor} = courseName;
console.log(courseName);
console.log(Instructor);


// how JSON looks -> its like object but not obj
// {
//     "name" : "dash", 
//     "password" : 123,
//     "time" : "4pm"
// }

// also api info or json info looks like this 
[
    {},
    {},
    {},
]