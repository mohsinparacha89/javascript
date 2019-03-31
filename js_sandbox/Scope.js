//Scope

//Global Scope
var a = 1;
let b = 2;
const c = 3;

function test(){
var a = 4;
let b = 5;
const c = 6;

console.log('Function Scope : ',a,b,c);

}

test();

//Block Scopr
if(true){
    //within the block scope, the var value will change! let and const do NOT change
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block Scope : ',a,b,c);
}


//with in the loop if you use let,the value wont be updated in the global scope either
for(let a = 0 ; a < 10 ; a++){
    console.log(`Loop: ${a}`)
}

console.log('Global Scope : ',a,b,c);