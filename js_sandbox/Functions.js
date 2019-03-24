//Functions

//Declarations
//doing a first name = john is to set a DEFAULT value
let func;
function greet(firstName = 'John'){
    return `Hello ${firstName}`;
}

func = greet('Mohsin');
func = greet();
console.log(func);

//Function expression

const square = function(x = 6){
    return x*x;
};

console.log(square(8));
console.log(square());

//Immediately invokable function expression = IFFEs
(function(){
    console.log('i am an iffy...');
})();

(function(name){
    console.log(`Hello ${name}`);
})('momo');


//Property Methods
const todo = {
    add : function(item = 'nothing'){
        console.log(`added ${item}`);
    }
}

todo.add('milk');
//some weird shit that we should not do :D
todo.delete = function(){
    console.log('removed');
}
todo.delete();