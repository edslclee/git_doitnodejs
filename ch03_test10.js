var Users = [
    { age: 29,
      name: '소녀시대'
    },
    { age: 25,
      name: '원더걸스',
    },
    { age: 22,
      name: '티아라',
    }
];


console.log('배열 element의 수: %d', Users.length);

for (var i = 0; i<Users.length; i++){
    console.log('%d 번째 요소의 이름 : %s', i+1, Users[i].name);
}

console.log('\nforEach 구문 사용하기');
Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ' : %s', item.name);
});
