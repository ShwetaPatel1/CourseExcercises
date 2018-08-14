//fibbonaci series

var f = 0, f1 = -1, f2 = 1;
const n = 15;
while(f<n)
{
    f= f1+f2;
    f1=f2;
    f2=f;
    console.log(f);
}