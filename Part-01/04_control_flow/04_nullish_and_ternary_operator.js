// nullish coalsecing operator (??): null or undefined
let value1;
value1 = 5 ?? 10;//5 will be added 
console.log(value1);

let value2 = null??30;//30 will be added because it has null(if any value is not there,then backup value is assigned)

// value3 = undefined ?? 20; // 20 will be assigned
// value4 = undefined ?? null ?? 20; //20 
value5 = null ?? 10 ?? 40; //10 (always first value is assigned it its valid)


// Ternary operator (?:)

const marks = 80;
marks > 80?console.log("top rank"):console.log("first class");
