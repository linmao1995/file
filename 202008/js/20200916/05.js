// 转为本地字符串格式
// var d = new Date();

// console.log(d.toLocaleString()) //2020-9-16 14:28:29
// console.log(d.toLocaleDateString())
// console.log(d.toLocaleTimeString())

var d = new Date('2020/8/16 10:20:30');
var _d = new Date();
// d.setFullYear() //修改年份
// 修改月份 0~11,  -1
d.setMonth(d.getMonth() - 3);
d.setFullYear(d.getFullYear() - 10)



// console.log(d.toLocaleString())



var emp = new Date('2020/9/27');
var day = new Date(emp);

day.setFullYear(day.getFullYear() + 3);

var day2 = new Date(day)

//到期前一个月续签，是周末提前到周五。
day2.setMonth(day2.getMonth() - 1)

if (day2.getDay() == 0) {//减两天
    day2.setDate(day2.getDate() - 2)
}
if (day2.getDay() == 6) {
    day2.setDate(day2.getDate() - 1)
}

console.log("入职日期:" + emp.toLocaleDateString())
//合同3年，到期时间。
console.log("到期时间:" + day.toLocaleDateString())
console.log("续签时间:" + day2.toLocaleDateString())