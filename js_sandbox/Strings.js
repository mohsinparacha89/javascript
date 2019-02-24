const firstName = 'William';
const lastName = 'Johnson';
const age =  36;
const str = 'hello my name is mohsin';
const post = 'java,php,mysql,.net,c#,devOps' 
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
val = firstName[4];
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
val =  firstName.charAt(2);

//get last char
val = firstName.charAt(firstName.length - 1);

//sub string
val = firstName.substring(0,4);
val = firstName.slice(-3);
val = str.split(' ');
val = post.split(',');
val = str.replace('mohsin', 'paracha');

//includes
val = str.includes('hello');


console.log(val);