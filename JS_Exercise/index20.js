// Create a new index20.js file
// Define a day variable and assign todays day number (number)
// Define a month variable and assign todays month number (number) (from 1 to 12)
// Define a year variable and assign todays year (number) (4 digits)
// Use a template variable to show the date with the following format: d/m/yyyy

let day, month, year;
day = 2;
month = 7;
year= 2018;
let date = `${day}/${month}/${year}`;
console.log(date);

//another way
var d = new Date(2018, 06, 30);
console.log(d.toString());