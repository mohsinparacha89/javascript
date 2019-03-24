const id = 100;

//equals
// if(id === 100){
//     console.log('equal');
// }
// else {
//     console.log('I am not equal');
// }

//test undefined

if(typeof id !== 'undefined'){
    console.log(`the Id is ${id}`);
}
else {
    console.log('No id');
}


//Greater or less

if(id > 99){
    console.log('greater');
}

//Inline
var color = 'yellow';
console.log(color === 'yellow' ? 'yellow' : color)


//switches

const name = 'momos';
const age = 30;

switch (name){
    case 'steve':
        console.log('steve it is');
        break;
    case 'momo':
        console.log('momo it is');   
        break;
    default : 
        console.log('no name');
}

let day;
switch(new Date().getDay()){
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'Monday';
        break;
     case 2:
        day = 'Tuesday';
        break;
}
console.log(day)