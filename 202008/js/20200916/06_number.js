var a = 1;
var b = new Number('1')
var c = Number(false)

var d = 2*5*3.14;
// console.log(d.toFixed(1))

var e = true;//字面量
//强制转为boolean
//0 NaN undefined null ''   隐式转换强制转为false
var f = new Boolean(0)
var g = Boolean(0)
// console.log(f,typeof f)
// console.log(g)

var arr = [];
var obj = {};
var c = Boolean(arr)
console.log(c)
