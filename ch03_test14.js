var Users = [
    { age: 29,
      name: '소녀시대'
    },
    { age: 22,
      name: '걸스데이',
    },
	{ age: 23,
      name: '티아라',
    },
	{ age: 25,
      name: '애프터스쿨',
    },
];

console.log('element의 수: %d', Users.length);
console.log('Original Users');
console.dir(Users);

var Users2 = Users.slice(1,3);
console.log('Sliced Users2');
console.dir(Users2);

var Users3 = Users.slice(1);
console.log('sliced Users3');
console.dir(Users3);



