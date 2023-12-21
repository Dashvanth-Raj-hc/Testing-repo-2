// setTimeout 
// it's a method actually but it calls API 
const sayMyName = function(name){
    console.log("dashvanth");
}
setTimeout(sayMyName,2000)

// changing text 
const textChange = ()=>{
    document.querySelector("h1").innerHTML = "Ananya";
};
const setChange = setTimeout(textChange,1000);

document.querySelector("#stop").addEventListener("click",()=>{
    clearTimeout(setChange);
    console.log("stopped!");
})