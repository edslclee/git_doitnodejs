//객체의 속성을 미리 정의
var Person = {
    age: 29,
    name: '소녀시대',
    add: function(a, b){
        return a + b;
    }
};

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('더하기 : %d', Person.add(10, 20));
