// setInterval 
const sayDate = function(sayMyName){
    console.log(sayMyName);
};

document.querySelector("#start").addEventListener("click",()=>{
    const intervalId = setInterval(sayDate,1000,"Dashvanth"); 
})
document.querySelector("#stop").addEventListener("click",()=>{
clearInterval(intervalId);
})


