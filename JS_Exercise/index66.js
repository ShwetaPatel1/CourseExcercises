// Use while structure to show numbers between 0 and 10 as output

var printNumber = 0;
while(printNumber<=10)
{
    console.log('Number :' + printNumber++);
}

//Use while structure to show numbers between 20 and 0 as output
console.log('-----------------------------------');
printNumber = 20;
while(printNumber>=0)
{
    console.log('Number :' + printNumber--);
}

// Use while structure to sum numbers between 0 and 1000
// Show the partial result as output too

printNumber = 1;
var sum = 0;
while(printNumber<=1000)
{
 sum += printNumber++;
 //printNumber++;
}
console.log("Sum of numbers between 0 and 1000 is :" + sum);