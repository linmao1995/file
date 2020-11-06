var username = prompt('username');
var pwd = prompt('pwd');
if (username === 'linmao' && pwd === 'linmao') {
    var sex = prompt('sex')
    console.log(sex, typeof sex)
    alert('username:' + username + " pwd=" + pwd + "  sex:" + (sex === '1' ? '男' : '女'))
} else {
    console.log('username:' + username + " pwd=" + pwd)
}
