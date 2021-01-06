//var a =  function (b) {
//    console.log(b);
//};
//var c = {
//    name: 'skks'
//};
//
//a('jj');
//
//a(c);


//var c = [5]
//
//var person = {
//    firstname: 'default',
//    lastname: 'default',
//    getFullname: function () {
//        return this.firstname + ' ' + this.lastname;
//    }
//}

//console.log(person.getFullname());



//var john = {
//    firstname: 'john',
//    lastname: 'Doe'
//}



//c.__proto__ = person;



//for (var prop in c) {
//    if(prop.hasOwnProperty(prop)){
//        console.log(prop);
//    }
//}
//console.log(c.hasOwnProperty('fistname'));


//a = 55
//c =8
//if (c >a)
//console.log('yes')




//function Person(f,b){
//    console.log(f);
//    arguments[1]();
//    setTimeout(10000,b);
//    b();
//    
//}





//function Person(a,b){
////    a=this;
////    console.log(a)
//    this.firstname = a,
//    this.lastname = b
//    
//};
//
//Person.prototype.getFullName = function () {
//    return this.firstname + ' ' + this.lastname;
//} 
//
//console.log(Person.prototype)
//
//var john = new Person('john','doe');
//console.log(john);
//var jane = new Person('jane', 'doe');
////console.log(jane.firstname);




var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function () {
        return 'Hi' + this.firstname;
    }
}

var john = Object.create(person);
john.firstname = 'john';
console.log(john);















