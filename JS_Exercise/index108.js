// Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
// The function must sort the params values from lower to higher
// Call the function with the following parameters: 10, 8, 25
// Show the following result as output: 8, 10, 25
// Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
// If highToLow is true then you need to show the following output: 25, 10, 8
// Call the function again with the following parameters: 10, 8, 25, true

function sortNumbers(number1,number2,number3)
{
    if(typeof(number1)==typeof(1) && typeof(number2)==typeof(1) &&typeof(number3)==typeof(1) )
    {
        
    }
    else
    {
        console.log('Invalid type. Only numbers are allowed');
    }
}


// let n1 ,n2,n3;
        // if(number1>number2)
        // {
        //     if(number1>=number3)
        //     {
        //         n1 = number1;
        //     }
        //     else
        //     {
        //         if(number2>=number3)
        //         {
        //             n2 = number2;
        //         }
        //         else
        //         {
        //             n3 = number3;
        //         }
        //     }
        // }
        // else
        // {
        //     if(number2>=number3)
        //     {
        //         n1 = number2;
        //     }
        //     else
        //     {
        //         if(number1>=number3)
        //         {
        //             n2 = number1;
        //         }
        //         else
        //         {
        //             n3 = number3;
        //         }
        //     }
        // }