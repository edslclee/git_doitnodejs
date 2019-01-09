var Users = [
    { age: 29,
      name: '소녀시대'
    },
    { age: 25,
      name: '원더걸스',
    }
];

console.log('unshift() 이전 element의 수: %d', Users.length);

Users.unshift({name:'티아라', age:23});

console.log('unshift() 이후 element의 수: %d', Users.length);
// unshift()는 index[0]에 추가
Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ' : %s', item.name);
});

Users.shift();

console.log('shift 이후 element의 수: %d', Users.length);

// shift()는 index[0]를 삭제
Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ' : %s', item.name);
});
