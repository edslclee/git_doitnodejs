var EventEmitter = require('events').EventEmitter;
var util = require('util');
var calc = function(){
	this.on('stop', function(){
		console.log('calc에 stop 이벤트 전달됨');
	});
};

//EventEmitter로부터 상속 받아 calc를 만듬.
util.inherits(calc, EventEmitter);

calc.prototype.add = function(a, b) {
	return a + b;
};

module.exports = calc;
