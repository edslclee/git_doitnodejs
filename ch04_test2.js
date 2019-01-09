//이벤트를 받기 위한 메소드
process.on('exit', function(){
	console.log('exit event 발생함');
});

setTimeout(function(){
	console.log('3초후에 실행되었음');

	process.exit();
}, 3000);

console.log('3초후에 실행될 것임.');
