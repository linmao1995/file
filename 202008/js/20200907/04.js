// 强制转为数值型
var n1 = Number('5a');
// console.log(n1,typeof n1);
var n3 = Number(true)
// console.log(n3,typeof n3)
var n4 = Number(null)//0
var n5 = Number(undefined)//NaN
// console.log(n4,n5)

// 转整形
var p1 = parseInt(undefined);
var p2 = parseInt(null);
// console.log(p1,p2)

var p3 = parseInt('a6.19b');
// console.log(p3)

var a1 = parseFloat(3.14); //3.14
var a2 = parseFloat('6.18a');//6.18
var a3 = parseFloat('a6.18b');//NaN
var a4 = parseFloat('5a');//5
// console.log(a1,a2,a3,a4)

var b1 = true;
var new_b1 = b1.toString();
console.log(new_b1,typeof new_b1)
