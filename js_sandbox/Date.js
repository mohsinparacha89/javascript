let val;
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('Sep 10 1981');
val = today.getFullYear();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1989);
console.log(birthday);