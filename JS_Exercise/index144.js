// Create a new index144.js
// Define a user variable and assign a literal object as value
// Add the following properties and values to the user object:
// property: username, value: batman
// property: password, value: Alfred1960ROCKS!

const user = {username : 'batman',
password:'abbcd1960Rocks!'
};

console.log(user.username);
console.log(user.password);


let strUsername = user.username.substr(0,1).toUpperCase() + user.username.substr(1,user.username.length).toLowerCase();
let strPassword = user.password.replace('1960','****');
user.username = strUsername;
user.password = strPassword;

console.log('\n\n');
console.log(user.username);
console.log(user.password);
