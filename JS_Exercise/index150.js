const numArray = [1, 2, 3, 4];

const reducer = function(summedValuesSoFar, currentValueInArray) {
    console.log(`Summed Value (so far): ${summedValuesSoFar}. Current Value in Array: ${currentValueInArray}`);
    return summedValuesSoFar + currentValueInArray;
}

console.log(`Final summed valued: ${numArray.reduce(reducer)}`);
var printValue = '';
const reducer2 = function(accumulator,currentItem)
{
    console.log('Accumulator : '+ accumulator);
    console.log('currentItem : '+ currentItem);
  //  printValue += accumulator;
    //return printValue;
}
//console.log(printValue);
numArray.reduce(reducer2);