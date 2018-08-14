const user = {
    username: 'batman',
    password: 'abbcd1960Rocks!',
    isValid: function (userName, password) {
        if (this.username == userName && this.password == password) {

            console.log('Welcome back batman!!');
        }
        else {
            console.log('Sorry, you can\'t enter the Batcave, try again..');
        }

    }

};

const userTry = 
{
    name : 'Shweta',
    age : 32,
    print : function()
    {
        console.log(this.name,this.age);
    }
}

user.isValid('batman1', 'abbcd1960Rocks!');
userTry.print();