var Users = [
    { age: 29,
      name: '소녀시대'
    },
    { age: 25,
      name: '원더걸스',
    }
];

console.log('splice로 Users[1]에 element 삽입');
Users.splice(1,0, {name: '트와이스', age: 27});
console.dir(Users);
console.log('splice 이후 element의 수: %d', Users.length);

Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ' : %s', item.name);
});

console.log('splice(2,1)로 Users[2] element 삭제');
Users.splice(2,1);
console.dir(Users);
console.log('delete 이후 element의 수: %d', Users.length);

Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ' : %s', item.name);
});

