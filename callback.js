a = [3, 1, 2];

//b로 전달될 함수는 규칙이 있음. 1) 인자로 두개블 받아야 함
//return 값으로는 0, 음수, 양수가 온다.
/*
function b(v1, v2){
	// return v1-v2 : ascending, v2 - v1 : descending, 0 : no effect
	console.log('c', v1, v2);
	return v1 -v2;
}

a.sort(b);
console.log(a);
*/

// b라는 function의 이름을 없애고 function을 a.sort()안으로 이동
a.sort(function (v1, v2){
	// return v1-v2 : ascending, v2 - v1 : descending, 0 : no effect
	console.log('c', v1, v2);
	return v1 -v2;
});
console.log(a);



