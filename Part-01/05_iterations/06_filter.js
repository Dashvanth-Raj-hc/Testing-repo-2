const languages = ["js","java","c++","python"];

// foreach doesn't return any values when you store in a variable 
const lang = languages.forEach((item)=>{
    //console.log(item);//return undefined
    // return item //return undefined
})

// how can we solve this problem (foreach return problem)

// filter method is used . it returns a value
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// in filter condition is must ex: mynumbers>5 or mynumbers===5
const above5numbers = myNumbers.filter((item)=>{
    return item > 5;
})

// now you can get numbers 
console.log(above5numbers);

// if you want above method in forEach(long process so filter is used)
let mynums = [];
myNumbers.forEach((num)=>{
    if(num>5){
        mynums.push(num);
    }
})
console.log(mynums);//this is a long process so filter method is used

// you can use filter for many things like this 
const books = [
    {title:"book one", genre: "fiction", publish:1981, edition:2004},
    {title:"book two", genre: "history", publish:1992, edition:1999},
    {title:"book three", genre: "fiction", publish:1999, edition:2000},
    {title:"book four", genre: "history", publish:1989, edition:1990},
    {title:"book five", genre: "science", publish:2009, edition:2004},
    {title:"book six", genre: "non-fiction", publish:2006, edition:2001},
]
// adding filter 
const userFilter = books.filter((publishDate)=>{
    return publishDate.publish>2000;
})
console.log(userFilter);

// history books filter
const historybook = books.filter((historybk)=>historybk.genre==='history');
// used arrow shortcut;
console.log(historybook);

// edition filter 
const edition2000 = books.filter((editionbk)=>editionbk.edition>2000);
console.log(edition2000);

// genre and publish both in filter (adding two filters/conditions in filter)
const genrePublish = books.filter((genrepublishbk)=>{
    return genrepublishbk.genre =="history" && genrepublishbk.publish>1990;
})
console.log(genrePublish);
// // for each 
// books.forEach((booktitle)=>{
//     console.log(booktitle.title);
// })

