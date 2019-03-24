//Loops
//FOR
// for(let i = 0; i <= 10 ; i++){
//     if(i === 2){
//         console.log('two is my number mate');
//        continue;
//     }
//     if(i === 5){
//         console.log('stopping the loop')
//         break;
//     }
//     console.log(i);
// }

//Array Loops

const cars = ['Ford','Honda','Toyota','BMW'];

// for(let i = 0 ; i < cars.length ; i ++){
//     console.log(cars[i]);
// }

cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});

//Map -> return something different

const users = [
    {id:1, name: 'John'},
    {id:2, name: 'Sara'},
    {id:3, name: 'Karen'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);


// FOR IN loop

const people = [
    {id:1, name: 'John'},
    {id:2, name: 'Sara'},
    {id:3, name: 'Karen'}
];

for(let p in people){
    console.log(people[p]);
}

const person = {
    firstName : 'mohsin',
    lastName : 'Shafqat',
    age : 29
}

for(let p in person){

    console.log(person[p]);
}
