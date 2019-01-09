var Users = [
    { age: 29,
      name: '소녀시대'
    },
    { age: 25,
      name: '원더걸스',
    }
];

console.log('push 이전 element의 수: %d', Users.length);

Users.push({name:'티아라', age:23});

console.log('push 이후 element의 수: %d', Users.length);

Users.pop();

console.log('pop 이후 element의 수: %d', Users.length);

Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ' : %s', item.name);
});
