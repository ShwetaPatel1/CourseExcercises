// Create a new index128.js file
// Define a iceCreamFlavors array with 10 flavors
// Remove the last 4 elements using pop
// Show the iceCreamFlavors items as output
// Show each removed flavor

var iceCreamFlavors = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];

//console.log('Before Push : \n'+iceCreamFlavors);
// var pushReturns = iceCreamFlavors.push('pushedElement');
// console.log('push returns :' + pushReturns);
//console.log('After Push : \n'+iceCreamFlavors);

//  console.log('Before Pop : \n'+iceCreamFlavors);
//  var popReturns = iceCreamFlavors.pop();
//  console.log('After Pop : \n'+iceCreamFlavors);
//  console.log('Pop returns :' + popReturns);

//  console.log('Before shift : \n'+iceCreamFlavors);
//  var shiftReturns = iceCreamFlavors.shift('shiftedElement');
//  console.log('after shift : \n'+iceCreamFlavors);
//  console.log('Shift returns :' + shiftReturns);

 console.log('Before unShift : \n'+iceCreamFlavors);
 var unShiftReturns = iceCreamFlavors.unshift('unShiftedElement','-----');
 console.log('after unShift : \n'+iceCreamFlavors);
 console.log('unShift returns :' + unShiftReturns);