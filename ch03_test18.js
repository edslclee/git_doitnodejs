function Person(name, age) {
    this.name = name;
    this.age = age
}

Person.prototype.walk = function(speed){
    console.log(speed + "km 속도로 걸어갑니다");
};

var person01 = new Person('Lee', 23);
console.log(person01.name + ' : ' + person01.age);

person01.walk(20);
