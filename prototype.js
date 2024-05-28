const Person = function(name , age){
    this.name = name;
    this.age = age;
}

const kevin = new Person('Kevin', 25);
Person.prototype.calcAge = function(){
    return    2024 - this.age;
};
console.log(kevin.calcAge()); 
console.log(kevin instanceof Person);
console.log(kevin.__proto__ == Person.prototype);
console.log(kevin.hasOwnProperty('calcAge'));
console.log(kevin.hasOwnProperty('name'));
console.log(Person.prototype);
console.log(kevin.__proto__);