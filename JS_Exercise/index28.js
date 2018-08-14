// Define a number variabe and assign the following value: 9
// Using the number variable show the multiplication table from 1 to 10 
// Example: 9 times 1 equals 9
// Use string concatenation for each output and console.log()

const NINE = 9;
var index= 1;
var indexTill = 10;

console.log('------------------------------------------------------------------------')
while (index <= indexTill ) {
    let str = `${NINE} times ${index} equals `;
    console.log(str, NINE*index);
    index++;
  }
console.log('------------------------------------------------------------------------')
