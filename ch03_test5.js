var person = {};
person['age'] = 29;
person['name'] = '소녀시대';

person.add = function(a, b){
    return a+b;
}

console.log('나이 : %d', person.age);
console.log('이름 : %s', person.name);
console.log('더하기 : %d', person.add(10, 20));
