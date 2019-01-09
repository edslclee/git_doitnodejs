//비동기 방식으로 file 읽기
var fs = require('fs');
fs.readFile('./package.json', 'utf8', function(err, data){
	console.log(data)
});

