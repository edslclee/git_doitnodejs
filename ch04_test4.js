var calc = require('./calc3');
var calc1 = new calc();
calc1.emit('stop');
console.log('calc에 stop 이벤트 전달함');
