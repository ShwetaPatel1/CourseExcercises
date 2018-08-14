// Define a biggerNumber function that will expect two parameters with the name firstNumber and secondNumber (numeric)
// Call the biggerNumber and pass two numbers as parameters 3 for firstNumber and 5 for secondNumber
// The biggerNumber must the following output: Number %firstNumber% is bigger than %secondNumber%
// In this case you need to validate which number is bigger than the other to get the right feature and output
// Also add the validation to check if both numbers are equal, if so then show the following message: Both numbers are %number%
// Make sure that the parameters are numbers, you can use typeof for it
// Show a error message in case any of the parameters are not number
// Call the biggerNumber with the following parameters: 6 and 3
// Call the biggerNumber with the following parameters: 2 and 2

function biggerNumber(n1, n2) {
    //console.log(typeof(n1));
       if (typeof(n1) == 'number' && typeof(n2) == 'number') {
   // if (typeof (n1) == typeof (1) && typeof (n2) == typeof (1)) {
        if (n1 != n2) {
            if (n1 > n2) {
                console.log(`Number ${n1} is bigger than ${n2}.`);
            }
            else {
                console.log(`Number ${n2} is bigger than ${n1}.`);
            }
        }
        else {
            console.log('Both numbers ' + n1 + ' and ' + n2 + ' are same.');
        }
    }
    else {
        console.log('Invalid type. Only numbers are allowed.');
    }
}

biggerNumber(6, 3);
biggerNumber(2, 2);
biggerNumber('3', 'f');
