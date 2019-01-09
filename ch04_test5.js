//file 읽기 : 동기식
var fs = require('fs');
var data = fs.readFileSync('./package.json', 'utf8');
console.log(data)
