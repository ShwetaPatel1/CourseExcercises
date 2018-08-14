// Create a new index33.js file
// Define the userCount variable and assign the following value: 100
// Increment the user count by 5
// Show the following output: Users count: %userCount%
// Decrement the user count by 3
// Show the following output: Users count: %userCount%
// We bought a new company so now we double the user count
// Show the following output: Users count: %userCount%
// We know that 50% of the users identify as men and the other 50% identify as women
// Show the following output: Users count: %userCount%, %menCount% % & %womenCount% %
// Use as many assignment operators as you can

let userCount = 100;
userCount += 5; //added
console.log('-----------------------------------------------------------------------------------')

console.log(`User Count : ${userCount}`);
userCount -= 3; //decremented
console.log(`User Count : ${userCount}`);
userCount *= 2; //doubled
console.log(`User Count : ${userCount}`);

console.log(`User Count : ${userCount}, men count : ${userCount/2}, women count : ${userCount/2}`);
console.log('-----------------------------------------------------------------------------------')
