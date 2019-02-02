//익명함수를 정의한후 객체 속성으로
var Person = {};

Person['age'] = 29;
Person['name'] = '소녀시대';

var oper = function(a, b){
    return a+b;
}

Person.add = oper;

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('더하기 : %d', Person.add(10, 20));
