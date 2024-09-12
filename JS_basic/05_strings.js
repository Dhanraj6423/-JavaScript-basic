const name = "dhanraj"
const age = 50

console.log(`hello my name is ${name} and my age is ${age}`);

const empID = new String ('a man eat mango on monday')
// console.log(empID[0]);
// console.log(empID.charAt(1));
// console.log(empID.length);
// console.log(empID.indexOf('m'));

const newstring = empID.substring(0,4);
console.log(newstring);
 
const newone =empID.slice(-4,-3);
console.log(newone);

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(-9, -5));
