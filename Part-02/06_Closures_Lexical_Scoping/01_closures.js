// closures 
// a closure gives access to outer function scope from inner function 

// you need to understand lexical scoping to understand closures 

function init(){
    let username = "dashvanth";
    function displayName(){
        console.log(username);
    }
    displayName();
}
init();

function outer(){
    let outerVarName = "dashvanth";
    function inner(){
        let innerVarName = "ananya"
        console.log("inside inner function", outerVarName);// can be accessed

        function innerTwo(){
            let innerTwoVarName = "priya";
            console.log("Inside innerTwo func",innerVarName);//can be accessed
            console.log("inside innerTwo func-accesin outer var: ",outerVarName);
        }
        innerTwo();
    }
    inner()
}
outer();
// console.log("TOO OUTER", username);

// closures -> when you return the function display name it'll take all the outer function variables/value with it**because of lexical scoping behaviour this is called closures

// closures-> when you return a function the full scope (including the outer/parent function scope will also return)
function init(){
    let username = "dashvanth";
    function displayName(){
        console.log(username);
    }
    return displayName();
}
init();

// practical scenario  for closures 
// the problem?->repeatation
// document.querySelector("#orange").onclick = function(){
//     document.body.style.backgroundColor = "orange";
// }
// document.querySelector("#green").onclick = function(){
//     document.body.style.backgroundColor = "green";
// }

// due to repeating the above code it'll cause problem (DIY code->Don't Repeat Yourself)
// so we can create a function for changing the bgcolor 

// wrong method 
// function clickHandler(color){
//     document.body.style.backgroundColor = `${color}`;
// }

// now you can just use the function 
document.querySelector("#orange").onclick = clickHandler("pink");
// this will also create problem
// without clicking it'll change the colors

// here comes the closure concept 

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`;

    // if you return the function you'll get solution 
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.querySelector("#orange").onclick = clickHandler("orange");
document.querySelector("#green").onclick = clickHandler("green");