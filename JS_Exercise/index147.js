const user = {
username : 'Shweta',
password : 'secret1234',
isSameAs(user)
{
 if(this.username == user.username && this.password == user.password)
 {
     console.log('Users are same.');

 }
 else
 {
     console.log('Not the same user.');
 }
}

};

var user2 = user;
console.log(user2);

user2.username = 'Rinku';
user2.password = '1233231323';
console.log(user2);
console.log(user);
user.isSameAs(user2);