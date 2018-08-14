
var i = 1;
var counter = 5;
while(i<=counter)
{
    let j = i;
    let str = " ";
    while(j>0)
    {
        str +="*";
        j--;
    }
    //--------------------
    let k = counter-i;
    let strSpaces = '';
    while(k>0)
    {
        strSpaces+="  ";
        k--;
    }
    i++;
    console.log(str+strSpaces+str+' ****'+str);
  //  console.log(str+strSpaces+str);
}

//----------------------------------------
i= counter;

while(i>=1)
{
    //loop for ***
    let j = i;
    let str = " ";
    while(j>0)
    {
        str +="*";
        j--;
    }
    //loop for spaces
    let k = counter-i;
    let strSpaces = '';
    while(k>0)
    {
        strSpaces+="  ";
        k--;
    }
    i--;
    console.log(str+strSpaces+str+' ****'+str);
  //  console.log(str+strSpaces+str);

}
