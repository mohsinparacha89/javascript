//var, let, const 

//var can be reassigned
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// vars can include letters, number _, $
// cannot start with a number
//------------------------------------------//

// //LET
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//Const

// const name = 'John Doe';
// console.log(name);
// // Cannot be reassigned
// name = 'Steve Smith';
// console.log(name);

//Must always be initialized
//const greeting;
//console.log(greeting);

//we can still change the data inside the object. 
const person = {
    name : 'John',
    age : '28'
}

person.name = 'tim';
person.age = '32';

// we can still change data inside
const number = [1,2,3,4,5]
number.push(6);
console.log(number)

