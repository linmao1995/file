var str = 'aaaaaddddd';
// 获取字符串长度 length
// console.log(str.length)
// 通过下标来获取对应的字符 charAt
// console.log(str.charAt(0))
// console.log(str[0])

// 遍历JavaScript.计算a出现的次数
var str = 'javascript java';
var total = 0;
for (var i = 0; i <= str.length - 1; i++) {
    // if(str.charAt(i)==='a'){
    //     total++;
    // }
    if (str[i] === 'a') {
        total++;
    }
}
// console.log(total)

// 查找某个字符，找到会返回下标。
// console.log(str.indexOf('a'))
// console.log(str.lastIndexOf('a'))


var eamil = '768415743@qq.com';
if (eamil.indexOf('@') !== -1) {
    // console.log("邮箱合法")
} else {
    // console.log("邮箱不合法")
}

var str = 'JavaScript World';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase())

// 截取字符串
// console.log(str.slice(0,4))

var a = eamil.indexOf('@');//获取@下标
// console.log(eamil.slice(0, a))//截取@之前
// console.log(eamil.slice(a + 1))//截取@之后

// console.log(str.substring(0,4))


var idcard = '422802199506073918';
// 年月日
var s = idcard.substr(6, 4);
// console.log(s)

var str = 'a,b,c';
// 字符串转数组

var str = '123.txt.png.456.jpg';
var s = str.split('.');
console.log(s[s.length - 1])