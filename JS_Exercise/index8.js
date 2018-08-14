// Create a new index8.js file
// Copy and paste the code from ex_7
// Refactor your code to use const instead of let
const firstName='Shweta';
const lastName = 'Patel';
const dateOfBirth = '25/05/2018';
const age= 32;
const address = 'Saskatoon';

console.log('\n ----------------------------------------------');
console.log('\n First Name :' + firstName);
console.log('\n Last Name : ' + lastName);
console.log('\n Date of Birth : '+dateOfBirth);
console.log('\n Age :' + age);
console.log('\n Address : '+address);
console.log('\n ----------------------------------------------');

age++;
// we cannot change or re-assign the value to a constant, it will give following error
// age++;
//    ^

// TypeError: Assignment to constant variable.

