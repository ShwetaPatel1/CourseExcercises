// Create a new index31.js file
// Calculate and show the perimeter of a triangle
// First side is 10
// Second side is 20
// Third side is 5
// Show a descriptive message to show the triangle perimeter and sides length

// ---------------------------------------------
// Create a new index32.js file
// Define a height variable and assig the following value: 10
// Define a base variable and assig the following value: 4
// Calculate the perimiter of the rectangular
// Calculate the area of the rectangular
// Show both calculation results, height and base length
// Use a descriptive message to show all the values

var firstSide = 10;
var SecondSide = 20;
var thirdSide = 5;
var trianglePerimeter = `Perimeter of triangle with sides a=${firstSide}, b=${SecondSide}, c=${thirdSide} is a+b+c = `;


//rectangle
var height = 10;
var base = 4;
var rectanglePerimeter = `Perimeter of rectangle with height = ${height}, base = ${base} is 2*(height + base) = `;
var rectangleArea = `Area of rectangle with height = ${height}, base = ${base} is  height*base = `;

console.log('-----------------------------------------------------------------------------------')

console.log(trianglePerimeter, firstSide+SecondSide+thirdSide);
console.log(rectanglePerimeter, 2*(height+base));
console.log(rectangleArea, height*base);

console.log('-----------------------------------------------------------------------------------')



