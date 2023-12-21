// forEach loop 
// callback func doesn't contain name ex: function (){}
// mostyly used for looping or accessing arrays or objects
const languages = ["js","java","c","python"];

languages.forEach(function(language){
    console.log(language);//it will print values of arrays
})

// arrow function forEach
languages.forEach((lang)=>{
    console.log(lang);
})

// passing a function in forEach 
function greet(){
    console.log("hello world!");
}
languages.forEach(greet)//only give the reference . do not call!

function allLanguages(lang){
    console.log(lang);
}
languages.forEach(allLanguages)

// forEach callback function contains items,index ,arrays
languages.forEach((item,index,languages)=>{
    console.log(`value:${item}, index: ${index}, full array: ${languages}`);
})


// objects inside a arrays(mostly used) in database operation 
const ProgLanguages =[
    {
        languageName:"javascript",
        extension:"js"
    },
    {
        languageName:"java",
        extension:"java"
    },
    {
        languageName:"python",
        extension:"py"
    }
]

// how to access or iterate object keys and values 
ProgLanguages.forEach((item)=>{
    console.log(item.languageName);//this will give all keys and values of objects
})