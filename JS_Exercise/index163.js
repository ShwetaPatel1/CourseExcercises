// Create a new index163.js
// Define a add function
// This function will return a numeric value with result of adding all the numbers 
//that we pass as parameter
// As we don't know how many parameters we are going to get we need to use a dynamic way to add this functionality
// Call the add function passing 5 numbers and show the result as output
// Call the add function passing 10 numbers and show the result as output

function addNumbers() {
    // console.log(arguments);
    // const argArray2 = Array.of(arguments); //[ { '0': 2, '1': 3, '2': 4, '3': 'shweta', '4': 1 } ]
    //console.log(argArray2);
    const argArray = Array.from(arguments); //[ 2, 3, 4, 'shweta', 1 ]
    let sum = 0;
    argArray.forEach(element => {
        if (typeof (element) == 'number') {
            sum += element;
        }
    });
    console.log(argArray.join(' + ') + ' = ' + sum); //to show what we passed in arguments
}

addNumbers(2, 3, 4, 'shweta', 1,5);

