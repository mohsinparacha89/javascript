//create some arrays
const numbers = [43,46,55,89,56,26,12]; //one way
const numbers2 = new Array(21,54,87,51,65,98); //the other way

const fruit = ['Apple','Banana','Oranges','Grapes'];

//we can have mixed arrays in javascript
const mixed = [22,'',true,null, {a:2,b:2}, new Date()];

let val;

//Get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//get a single value
val = numbers[5];
//insert 
numbers[2] = 100;
//find index 
val = numbers.indexOf(12);

//Mutating arrays
//Adding to end
numbers.push(777);
//adding to front
numbers.unshift(120);
//take off from end
numbers.pop();
//take off from the frong
numbers.shift();
// Splice values
numbers.splice(0,1)
//reverse
numbers.reverse();
//concat
val = numbers.concat(numbers2);
//sort
val = fruit.sort();

//use compare function
val = numbers.sort(function(x,y){
     return x-y;
});

//use compare function
val = numbers.sort(function(x,y){
    return y-x;
});


//find 
function under50 (num){
    return num < 50;
}

val = numbers.find(under50);

 
console.log(numbers);
console.log(val);