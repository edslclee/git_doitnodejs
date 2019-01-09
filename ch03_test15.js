function add(a, b, callback){
	var result = a + b;
	callback(result);
}

add(10, 10, function(result){
	console.log('parameter로 전달된 콜백함수가 호출됨.');
	console.log('add(10, 10)의 결과 : %d', result);
});



