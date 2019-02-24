//Type Conversion

let val;

//Number to String
val = String(555);
val = String(4 + 4);

//Boolean to string

val = String(true);

//Date to String
val = String(new Date());

//array to string

val = String([1,2,3,4]);

//ALTERNATIVE
//toString();
val = (5).toString();
val = (true).toString();


//String to number

val = Number('2');
//Boolean to number

val = Number(false); //Usual 1/0 true false
val = Number(null);

//ALTERNATE

val = parseInt('100.30');
val = parseFloat('100.31')

//output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));



//Type Coersion

const val1 = 5;
const val2 = 6;

const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);


// since we change 5 to a string, JS takes and changes 6 to a string as well
const val3 = '5';
const val4 = 6;

const sum2 = val3 + val4;
console.log(sum2);
console.log(typeof sum2);