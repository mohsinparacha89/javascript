const person = {
    firstName : 'Steve',
    lastName : 'Smith',
    age : 30,
    email : 'steve@aol.com',
    hobbies : ['books','movies','music'],
    address : {
        city: 'miami',
        state : 'FL'
    },
    getBirthYear : function(){
        return 2017- this.age;
    }
}


let val;
//the whole object
val = person;
//specific value
val = person.firstName;
//shitty way to do it
val = person['firstName'];

val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

const people = [
    {name : 'John', age : 30},
    {name : 'Mike' , age : 40}
]


console.log(val);