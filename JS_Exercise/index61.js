// Create a new index61.js file
// Define weekdayNumber and assign a numeric value between 1 and 7
// If weekday number is 1 show the following message: Today it's Monday
// If weekday number is 2 show the following message: Today it's Tuesday
// If weekday number is 3 show the following message: Today it's Wednesday
// If weekday number is 4 show the following message: Today it's Thursday
// If weekday number is 5 show the following message: Today it's Friday
// If weekday number is 6 show the following message: Today it's Saturday
// If weekday number is 7 show the following message: Today it's Sunday
// If weekday number it's not bettwen 1 and 7 show an error message: Error: Please input a number bettwen 1 and 7

// Switch version:
// Use a switch statement to show weekday name using the weekday variable value
// IF/ELSE/IF version:
// After the switch version create the same functionality but using if/else/if statement
// Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value

var weekdayNumber = 5;
var message = 'Today it\'s ';
var day;
if(weekdayNumber>0 && weekdayNumber <8)
switch(weekdayNumber)
{
    case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
        break;
        
        default : 
        day = "Sunday";
}

console.log(message+day);

if (weekdayNumber == 1){
    day = "Monday";}
else if(weekdayNumber == 2){
day = "Tuesday";}
else if(weekdayNumber == 3){
day = "Wednesday";}
else if(weekdayNumber == 4){
day = "Thursday";}
else if(weekdayNumber == 5){
day = "Friday";}
else if(weekdayNumber == 6){
day = "Saturday";}
else{
day = "Sunday";
}
console.log(message+day);
var str = '';
console.log(typeof(str));

