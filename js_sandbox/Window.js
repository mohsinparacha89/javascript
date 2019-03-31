//WINDOW METHODS / OBJECTS / PROPERTIES


//Alert 
//alert('Hello')

//Prompt
// const input = prompt();
// alert(input);

//Confirm
// if(confirm('Are you sure')){
//     console.log('Yes');
// }
// else {
//   console.log('nothing will happen');
// }

let val;

//Outer heigher and width
val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight;
//val = window.innerWidth;

//Scroll points
val = window.scrollY;


//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.href;
//we can pull query params from the URL using search, e.g http://127.0.0.1:5500/?id=1&momo=123
// we will get id  and momo;)

val = window.location.search;


//History object
// we can go back to where we came from, -1 for 1 step back, -2 for two steps and so on.. 
//window.history.go(-2);

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);