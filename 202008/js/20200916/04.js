// 倒计时 1天10时10分10秒。
var day1 = new Date('2020-10-01 00:00:00');
var day2 = new Date();

//1000*60*60*24

// 两个date对象相减得到两者之间毫秒数
// console.log(day1-day2)

var d = day1.getTime() - day2.getTime();//毫秒差
var d2 = d / (1000 * 60 * 60 * 24)//天
var d3 = (d % (1000 * 60 * 60 * 24))//不足一天
var d4 = d3 / (1000 * 60 * 60);//小时
var d5 = (d3 % (1000 * 60 * 60));//不足一小时
var d6 = d5 / (1000 * 60) //分
var d7 = d5 % (1000 * 60)//不足1分
var d8 = d7 / 1000;//秒

console.log(parseInt(d2) + "天" + " " + parseInt(d4) + "小时" + " " + parseInt(d6) + "分" + " " + parseInt(d8) + "秒")