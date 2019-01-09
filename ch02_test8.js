var path = require('path');
var directories = ['Users','soominlee','docs'];

var dirStr = directories.join();
console.log('dir : ' + dirStr)

var dirStr2 = directories.join(path.sep);
console.log('문서 directory : %s', dirStr2);

//가장 많이 쓰는 방법
var filepath = path.join('/Users/soominlee', 'notepad.exe');
console.log('filepath : ' + filepath)

var dirname = path.dirname(filepath);
console.log('dir name : ' + dirname);

var basename = path.basename(filepath);
console.log('base name : ' + basename);

var extname = path.extname(filepath);
console.log('ext name : ' + extname);
