
// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 0);// it will execute after 3 even it's time is 0
// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({name:"dash",password:123});
//         }else{
//             reject("error: something went wrong!!!")
//         }
//     },1000)
// });

// async function consumePromiseOne(){
//     const response = await promiseOne;
//     console.log(response);
// }


const movies = {
    movieName: "harrypotter",
    favCharacter: "harry",
    releaseYear: 2004,
    author: "jk rowling",
}

// using for in loop 
for(let movieDetails in movies){
    console.log(`${movieDetails} : ${movies[movieDetails]}`);
}

const numbers = ["d","a","s","h"];
for(const number in numbers){
    console.log(numbers[number]);
}

// forEach 
const users = {
    user1 : "dashvanth",
    user2: "ananya",
    user3: "priya",
    user4: "dash",
    user5: "suguna"
}
// users.forEach(function(user){
//     console.log(users.user);
// })
const coding = ["js","java","html","css"];
coding.forEach(function(lang){
    console.log(lang);
})


// filter,map,reduce 
const books = [
    {
        bookname: "philosophers stone",
        released: 2002,
        published: 1989
    },
    {
        bookname: "chamber of secrets",
        released: 2003,
        published: 2001
    },
    {
        bookname: "prisoner of azkaban",
        released: 2004,
        published: 2000
    },
    {
        bookname: "goblet of fire",
        released: 2006,
        published: 1996
    }
]

// filter 
const published = books.filter((releasedAbove)=>{
    return releasedAbove.published>2000;
})
console.log(published);

// constructor function
function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;

}
const userOne = new user("dashvanth",6,true);
console.log(userOne);
const userTwo = new user("ananya",8,false);
console.log(userTwo);