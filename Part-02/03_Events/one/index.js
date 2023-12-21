// document.getElementById("owl").onclick = ()=>{
//     alert("this is an owl image")
// }
// the above way is not a valid way to add event

// the best approach 
// document.getElementById("owl").addEventListener("click",function(){
//     alert("Click on owl");
// },false)

// there is also a third parameter for eventlistener but it's default(not required to write)


// another approach 
// attachEvent 

// Event object 
// document.getElementById("owl").addEventListener("click",function(e){
//     console.log(e); //event obj->containes object for particular event ex: click->pointerEvent
// })


// Event Propogation->has two context 1.eventBubbling 2. Event capturing.
// Examples 
// 1. Event bubbling ->3rd pararmeter false means event bubbling
// event bubbling ->it will display bottom to top (inner element first and outside or parent element)

// ***
// e.stopPropagation() ->used to stop event bubbling where it'll not show parent or outer element


// document.getElementById("images").addEventListener("click",function(e){
//     e.stopPropagation();
//     console.log(("clicked inside the ul"));
// },false)


// document.getElementById("owl").addEventListener("click",function(e){
//     e.stopPropagation();
//     console.log(("clicked owl"));
// },false)


// 2. Event capturing ->3rd pararmeter true means event capturing
// event capturing ->it will display top to bottom(outer element/parent element first then inner element)

// document.getElementById("images").addEventListener("click",function(e){
//     // e.stopPropagation();
//     console.log(("clicked inside the ul"));
// },true)


// document.getElementById("owl").addEventListener("click",function(e){
//     // e.stopPropagation();
//     console.log(("clicked owl"));
// },true)

// ***
// e.stopPropagation()
// ***
// e.preventDefault(); used to stop the default action 
// document.getElementById("google").addEventListener("click",function(e){
//     console.log("google clicked");
//     e.preventDefault();//stops going to google page
//     e.stopPropagation();
// })



// Project ->click to remove images from the page
document.querySelector("#images").addEventListener
("click",function(e){

    if(e.target.tagName==="IMG"){
    const removeImage = e.target.parentNode;//targets the li ele
    removeImage.remove();        
    }
    // 1st approach to remove image 

    // 2nd approach 
    // removeImage.parentNode.removeChild(removeImage);
    // problems - if you click on li it will remove all images due to its parent is ul so
},false)