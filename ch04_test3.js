//이벤트를 받기 위한 메소드
process.on('tick', function(count){
	console.log('tick event 발생함 : ' + count);
});

setTimeout(function(){
	console.log('2초후에 실행되었음');

	process.emit('tick', '2');
}, 2000);

console.log('2초후에 실행될 것임.');
