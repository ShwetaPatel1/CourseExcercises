function Person(name) {
    this.name = name;
}

Person.prototype.farewell = function () {
    console.log(this.name + ' has left the building. Bye for now!');
};

function Teacher(name, subject) {
    Person.call(this,name);
    this.subject = subject;
}

//var person1 = new Person('xyz');
//console.log(person1.name);
//person1.farewell();
var teacher1 = new Teacher('Shweta','Maths');

Teacher.prototype.greet = function(){
    console.log('Hi! I am '+this.name +', and I teach '+this.subject);
}


//teacher1.farewell();
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.farewell = function(){
    console.log('Bye! '+this.name +', we will miss '+this.subject +' classes');
}
var teacher2 = new Teacher('rinku','cs');
teacher1.greet();
teacher1.farewell();
teacher2.farewell();
//teacher2.greet();
