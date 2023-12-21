const marvelHeroes = ["ironman", "spiderman", "thor"];
const dcHeroes = ["superman", "flash", "batman"];
// marvelHeroes.push(dcHeroes); wrong way to merge
// creates a problem 
// valid way to merge 
// const allHeroes = marvelHeroes.concat(dcHeroes);

// easy way to merge two arrays (spread operator ...) 
const allHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allHeroes);

const combinedNumbers = [1,2,[3,4,[5,6]],7,8];//you can make this normal no.s using flat method
const spreadNumbers = combinedNumbers.flat(Infinity);
console.log(combinedNumbers);
console.log(spreadNumbers);


// Array.isArray()--> used to check array/not 
const name = "dashvanth";
const userDetails = ["dashvanth", 22, true];
console.log(Array.isArray(name));
console.log(Array.isArray(userDetails));

// .from -> used to convert to arrays 
console.log(Array.from(name));

// .of->used to convert array and return new array 
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));