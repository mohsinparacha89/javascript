//Template strings
const name = 'John';
const age = '30';
const job = 'Web developer';
const city = 'Kuala lumpur';

let html;
//without template strings
html = '<ul><li>Name : ' + name + '</li><li>Age : ' + age + '</li><li>Job : ' 
      + job + '</li> <li>city : ' + city + '</li></ul>';

html = '<ul>'+
        '<ul><li>Name : ' + name + '</li>'+
        '<li>Age : ' + age + '</li>'+
        '<li>Job : ' + job + '</li>' + 
        '<li>city: ' + city + '</li>'+
        '</ul>';     
        
//with template strings 
var hello  = () => {return 'hello'}

//with template literals we can put whatever the fuck we want in this guy 
html = `
<ul>
    <li>Name : ${name}</li>
    <li>Age : ${age}</li>
    <li>Job : ${job}</li>
    <li>city : ${city}</li>
    <li>${2+2}</li>
    <li>${hello() === 'hello'}</li>

</ul>
`;
document.body.innerHTML = html;


