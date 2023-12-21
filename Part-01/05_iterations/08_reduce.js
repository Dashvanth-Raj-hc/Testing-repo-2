// .reduce() 
// used mostly in shopping cart 
// accumulator is a empty variable , when you give initial value it goes to accumulator. only first time accumulator need initial value to start then it will automatically gets the sum of currval
const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc}, currval: ${currVal}`);
//     return acc + currVal;
// },3)

// in arrow function 
const myTotal = myNums.reduce((acc,currval)=>(acc+currval),0);
const myTotal2 = myNums.reduce((acc,currval)=>{return acc+currval},0);
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 4999
    },
    {
        itemName: "front end course",
        price: 1999
    }
]

const totalPurchase = shoppingCart.reduce((item,itemprice)=>value+itemfprice.price,0);
console.log(totalPurchase);