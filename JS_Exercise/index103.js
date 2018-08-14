// Define a evenNumbers variable and assign a function as value
// When executed the evenNumbers function will print even numbers between 0 and 100 as output
// Execute this function 5 times

//function can be assigned to a variable without giving name and called by variable name
 const printEvenNumberBetween = function (n1,n2)
{
    let smallNum ;
    let bigNum ;
    if(n1 < n2)
    {
        smallNum = n1;
        bigNum = n2;
    }
    else
    {
        smallNum = n2;
        bigNum = n1;
    }
    console.log('Even numbers between '+smallNum+' and '+bigNum+' are :');
    let i ;
        if(smallNum%2 == 0)
        {
             i = smallNum;
        }
        else
        {
            i = smallNum+1;
        }
        while(i<=bigNum)
        {
            console.log(i);
            i +=2;
        }
}

printEvenNumberBetween(3,'21');
console.log('----------');
printEvenNumberBetween(47,21);
console.log('----------');
printEvenNumberBetween(40,45);
