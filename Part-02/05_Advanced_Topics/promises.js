// promises 
// it is a object where a asynchronous operation/task is asssingned and it'll compelete it in future or not(resolve / reject)
// it has 3 states 1. pending: initial states 
                    // 2. fullfilled: when operation is completed 
                    // 3. rejected : when operation is failed 
// has 2 parts 1.consuming promise 2. creating promise.
// 2. creating promise 
const promiseOne = new Promise(function(resolve,reject){
    //do an async task 
    //DB calls, cryptography, network related requests
    setTimeout(function(){
        console.log("Async task 1 is completed");
        resolve(); //connects to .then();
    },1000)

})
promiseOne.then(function(){
    console.log("promise 1 consumed");
})
// the above is promise creating 

// 1. promise consuming 
// promiseOne.then(function(){})->then has connectino with resolve. when promise is fulfilled Inside then a function will return the task that we created in promise 
// basically then will return a task that we created in promise if async task is fullfilled 

// you need to call resolve() method to connect to then() 

// promiseOne.then(function(){
//     console.log("promise consumed");
// })


// promiseOne.catch(function(){})->basically catch will return rejected when task is unable to complete

// another example 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2.");
        resolve();
    },1000)
}).then((function(){
    console.log("promise 2 consumed");
}));

// passing parameter/data in resolve() and printing them in then ()

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "dash",email:"dash@gmail.com"});//passing data in objs, you can also pass in arrays
    },1000)
})
promiseThree.then(function(userDetails){
    console.log(userDetails);//it will return / print the data we added in resolve
})

// using reject to handle error in promise 
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"priya",password:8989});
        }else{
            reject("ERROR: Something went wrong!")
        }
    },2000)
})

// the below is called method chaining. where we use to get out from callback hell and this is most used in database. the first then returns the resolve parameter so we can call another then and get the data of resolve
promiseFour
.then((userDetails)=>{
    console.log(userDetails);
    return userDetails.username;
})
.then((myUserName)=>{/*method chaning */
    console.log(myUserName);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log("the promise is either resolved or rejected"))

// the finally executes whether the promise resolve or reject . it always execute
// the error was happening coz we set the value error= true 

// try to write .then in next line 

// promise basics over^^^

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({lang:"javascript",extension:"js"});
        }else{
            reject("Error: Something went wrong Man!");
        }
    },3000)
})

// you can also handle the errors by async and await rahter than .then() and .catch()

// async ->same like then and catch ,waits for the tasks to complete. if task completes it executes else it gives errors.

// async and await can't handle errors directly so we need to use try and catch block 
// try 
// and catch block 
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
//await will get the promiseFive values/data
        console.log(response);
    }catch(error){
        console.log(error);
    }

}

// you need to call the async function like this 
consumePromiseFive();
// promiseFive
// .then(function(heroes){
//     return heroes;
// })
// .then(function(hero){
//     console.log(hero[2]);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log("I am finally method. I'll execute whether the promise resolve or rejected. IDC");
// })