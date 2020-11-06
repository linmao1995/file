// 1、打印2000-2100前10个闰年
var i = 0;
var year = 2000;
while (year <= 2100) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        // console.log(year)
        i++;
    }
    if (i == 10) {
        break;
    }
    year++;
}
// console.log(i)

// 计算1-100之间所有整数和，一旦总和超过4000，强制结束循环。
for (var i = 1, sum = 0; i <= 100; i++) {
    sum += i;
    if (sum > 4000) {
        break;
    }
}
// console.log(sum,i)

// 3、打印九九乘法表
for (var m = 1; m <= 9; m++) {
    var str = '';
    for (var n = 1; n <= m; n++) {
        str += n + '*' + m + '=' + n * m + '\t';
    }
    console.log(str)
}

console.log()
//9*9
for (var a = 9; a >= 1; a--) {
    var str = ''
    for (var b = a; b >= 1; b--) {
        str += b + '*' + a + '=' + (a * b) + '\t';
    }
    console.log(str)
}