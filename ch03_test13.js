var Users = [
    { age: 29,
      name: '소녀시대'
    },
    { age: 25,
      name: '원더걸스',
    }
];

console.log('delete 이전 element의 수: %d', Users.length);

delete Users[0];

console.log('delete 이후 element의 수: %d', Users.length);

Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ' : %s', item.name);
});

