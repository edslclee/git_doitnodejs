var url = require('url');

// naver에서 popcorn 검색시 url을 copy
var urlstring = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=popcorn'

var cururl = url.parse(urlstring);
console.dir(cururl)

console.log('query -> ' + cururl.query);

var curStr =  url.format(cururl);
console.log('url -> ' + curStr);

var querystring = require('querystring');
var params = querystring.parse(cururl.query);
console.log('검색어 ->' + params.query);
