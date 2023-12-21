# ⛳Project 06 

# UNLIMITED BACKGROUND COLOR GENERATOR 💛

[click here to see the live link!]()

## Solution Code 🧑🏻‍💻
```javascript
// random color 
const randomColor = function(){
    const hex = '123456789ABCDEF';
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
const startChangingColor = function(){
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
```
<br>

### Made with ❤️ by Dashvanth