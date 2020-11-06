// 创建Date对象
var d1 = new Date('2020/09/16')
//月份 0~11
var d2 = new Date(2020, 09, 16, 10, 10, 10)
//获取操作系统时间
var d3 = new Date();
//距离计算机元年的时间。时间戳?
var d4 = new Date(0);
// console.log(d4)

var d = new Date('2020-09-10 09:20:21');
var year = d.getFullYear();
var month = d.getMonth() >= 10 ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1));
var date_ = d.getDate() >= 10 ? d.getDate() : ('0' + d.getDate());
var hours = d.getHours() >= 10 ? d.getHours() : ('0' + d.getHours())
var minutes = d.getMinutes() >= 10 ? d.getMinutes() : ('0' + d.getMinutes());
var seconds = d.getSeconds() >= 10 ? d.getSeconds() : ('0' + d.getSeconds());
var xinqi = d.getDay();

var arr = ['日', '一', '二', '三', '四', '五', '六'];

console.log(year + "年" + (month) + "月" + date_ + "日" + " " + hours + "时" + minutes + "分" + seconds + "秒" + " " + "星期" + arr[xinqi])

// console.log( + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日" + " " + (d.getHours()<10?('0'+d.getHours()):d.getHours() ) + ":" + d.getMinutes() + ":" + d.getSeconds()+" 星期");

// 星期 0~6
// console.log(d.getDay());
// console.log(d.getTime())
