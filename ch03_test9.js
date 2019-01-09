var Users = [
    { age: 29,
      name: '소녀시대'
    },
    { age: 25,
      name: '원더걸스',
    }
];

var add = function(a,b){
    return a+b;
};

Users.push(add);

console.log('배열 element의 수: %d', Users.length);
console.log('세번째 요소로 추가된 함수 실행 : %d', Users[2](10,10));
