// 英文首字母大写输出
var str = 'wHere aRe you fRom';

var newstr = str.toLowerCase();//转小写

var arr = newstr.split(' ');//依据空格转数组

var new_str = '';

for (var a = 0; a <= arr.length - 1; a++) {//转换以后得到的是一个新的字符串，对原来的字符串没有任何影响
    new_str += arr[a].charAt(0).toUpperCase() + arr[a].slice(1) + " " //数组转字符串，按照空格分隔 join
}

// console.log(new_str)



var arr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9]

var arrarr = [];
var strnull = '';

for (var a = 0; a <= 3; a++) {
    var r = parseInt(Math.random() * arr2.length );
    // console.log(r)
    // strnull += arr2[r]
    arrarr.push(arr2[r])
}

console.log(arrarr)


