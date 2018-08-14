// Define a meaningOfLife function
// The meaningOfLife returns the number 42
// Show the following message as output: The meaning of life is: %meaningOfLife% (use a template)
// In this exercise you need to call the meaningOfLife() function inside the template placeholder

function meaningOfLife()
{
    return 'Simplicity, Inner Peace and Satisfaction' ;
}

var printMessage = `The meaning of life is : ${meaningOfLife()}`;
console.log(printMessage);