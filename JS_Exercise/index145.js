

const user = {
username : 'batman',
password:'abbcd1960Rocks!'
};


if(user.username == 'batman' && user.password == 'abbcd1960Rocks!' )
{

    console.log('Welcome back batman!!');
}
else
{
    console.log('Sorry, you can\'t enter the Batcave, try again..');
}

console.log(user);
console.log(user.username.toUpperCase());
console.log(user.username);
user.married = true;
console.log(user.married);
console.log(user);
