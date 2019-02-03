function add(a, b, callback){
    var result = a + b;
    callback(result);
}

add(10, 20, function(result){
   console.log('call back');
   console.log('add(10, 10)의 결과 : %d', result);
});
