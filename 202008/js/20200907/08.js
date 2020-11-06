// 声明变量保存年份，如果是闰年打印闰年，
// 能被4整除且不能被100整除，或者能被400整除。

var year = 2020;
((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) && console.log('闰年')

console.log(5|7)
console.log(6|9)
