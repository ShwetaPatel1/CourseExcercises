//fibonaci series 0,1,1,2,3,5,8,13,21,..

var fibonaci = function()
{
    let n1 = -1;
    let n2 = 0;
    let n3 = 1;

    let counter = 0;
    while(counter <=10)
    {
        n2 = n1+n3;
        n1=n3;
        n3=n2;
        console.log(n2);
        
        counter++;
        
    }
}

fibonaci();