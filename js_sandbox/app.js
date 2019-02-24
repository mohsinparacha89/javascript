const firstName = 'William';
const lastName = 'Johnson';
const age =  36;
let val;

val = firstName + lastName;

//Concat
val = firstName + ' ' + lastName;

//Append
val = 'Mohsin ';
val += 'Paracha'

val = 'Hello, My name is ' + firstName + ' and I am '+ age;

//Escaping 
val = 'that\'s awesome, I can\'t wait';
//Length 
val = firstName.length;

//concat 
val = firstName.concat(' ', lastName);

//Uppe and lower case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

console.log(val);