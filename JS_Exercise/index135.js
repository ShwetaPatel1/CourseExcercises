// Create a new index135.js file
// Define a mutants array and assign the following values
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// Iterate over each mutants item using forEach
// Show the mutant name and position

// Iterate over each mutants item using forEach
// The objective is to create a string value with Iceman, Logan and Phoenix
// To create the string you need to get the names while iterating the mutants array
// Once the iteration is over show the generated string with the selected mutants names

var mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast'];
function display(name,index,extraWord)
{
    //console.log(extraWord +' : Element at index '+ index + ' is '+name);
    console.log('Argument 1 : '+name);
    console.log('Argument 2 : '+index);
    console.log('Argument 3 : '+extraWord);
    //console.log('Argument 4 : '+extraword2);
}

mutants.forEach(display);        //not working

// mutants.forEach(function (names,index)
// {
//     display(names,index);
// }
// );

console.log('----------------------');
var printNames = '';
mutants.forEach(function (name)
{
    printNames += name + ' , ';
}
);
console.log(printNames);
