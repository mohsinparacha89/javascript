
/**
 * PRIMITIVE
 * String
 * Number all numbers included, float,double, int 
 * Boolean 
 * Null
 * Undefined, unassigned
 * Symbols (ES6)
 
 */
//String
const name = 'John Doe';
console.log(typeof name)

//Numbers
const age = 45;
console.log(typeof age)

//Boolean 
const hasKids = true;
console.log(typeof hasKids);

//null;
const car = null; 
console.log(typeof null); //this is a bug in js null is not an object ;) 
 

//undefined;
let test;
console.log(typeof test);

//Symbol
const sym = Symbol();
console.log(sym);

/*
 * REFERENCE
 * Arrays
 * Object Literals
 * Functions
 * Dates
 * Anything Else
 */

 //Arrays
const hobbies = ['movies', 'music'] ;
console.log(typeof hobbies);

//Object Literal
const address = {
    city : 'Boston',
    state : 'MA'  
}

console.log(typeof address);

const today = new Date();
console.log(today + typeof today);
