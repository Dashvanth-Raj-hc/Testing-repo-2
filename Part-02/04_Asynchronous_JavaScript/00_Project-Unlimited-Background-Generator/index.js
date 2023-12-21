// random color 

const randomColor = function(){
    const hex = '123456789ABCDEF';
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalId;//declaring here because global scope can access anywhere
const startChangingColor = function(){
    // intervalId = setInterval(changeBgColor,1000);    
    // clean & optimised code 
    if(!intervalId){
    intervalId = setInterval(changeBgColor,1000);          
    }   

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector("#start").addEventListener("click",startChangingColor);

document.querySelector("#stop").addEventListener("click",stopChangingColor);