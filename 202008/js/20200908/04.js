var n = 3 || 2;//第一个数=>true.把第一个给n，第一个数为false把第二个给n
var m = 3 && 2;//第一个数=>true,把第二个给m，第一个数为false把第一个给m
// console.log(n, m)


var username = prompt('username');
var pwd = prompt('pwd');
if (username === 'root' && pwd === '123456') {
    console.log('success');
} else {
    console.log('error');
}