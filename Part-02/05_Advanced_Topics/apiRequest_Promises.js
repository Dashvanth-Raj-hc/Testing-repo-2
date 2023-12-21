const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"priya",password:8334});
        }else{
            reject("ERROR: Something went wrong!");
        }
    },1000)
})

// async function consumePromiseOne(){
//     try{
//         // const response = await promiseOne;
//         // console.log(response);
//         const response = await fetch("https://api.github.com/users/dashvanth");
//         const data =await response.json();
//         console.log(data.name);
//     }catch(error){
//         console.log(error);
//     }

// }
// consumePromiseOne();

// in then and catch method 
fetch("https://api.github.com/users/dashvanth")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    console.log(data.name);
})
.catch(function(error){
    console.log(error);
})