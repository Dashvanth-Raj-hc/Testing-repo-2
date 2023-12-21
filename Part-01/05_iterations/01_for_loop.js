// for loop 
for(let i=0;i<=10;i++){
    if(i==5){
        console.log("5 is best number");
    }
    console.log(i);
}

// nesting loop 
for(let i=0;i<=10;i++){
    console.log(`outer loop ${i}`);
    for(let j=0;j<=10;j++){
        console.log(`inner loop ${j}`);
    }
}
// multiplication table in nesting loop
for(let i=1;i<=10;i++){
    console.log(`outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`inner loop ${j}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// looping in arrays 
const heros = ["batman","spiderman","superman"];
for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
}

// break and continue 
// break ->used to stop the iteration and exits from the loop 
// continue ->used to stop the current iteration and moves to the next iteration 

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 detected");
        break;
    }
    console.log(i);
}

// continue 

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 detected, move forward");
        continue;
    }
    console.log(i);
}