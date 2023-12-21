// map method 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = numbers.map((num)=>{
//     return num+10;
// })

// console.log(newNums);

// chaining 

const chainingNumbers = numbers
                        .map((num)=>num*10)/*all value willbe multiplied by add and that value is performed on next methpd*/
                        .map((num)=>num+1)/*numbers value now are 10,20...100 because of previous method */
                        .filter((num)=>num>50)
console.log(chainingNumbers);
