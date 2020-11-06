var idcard = '422802199506073918';

var y = idcard.substr(6,4);
var m = idcard.substr(10,2);
var d = idcard.substr(12,2)
var s = idcard.substr(-2,1)

// console.log(y+"年"+m+"月"+d+"日 性别"+(s%2===1?'男':'女'))

var a = 10.4;
// console.log(Math.round(Math.PI*(Math.pow(a,2))));

var d1 = new Date();
// console.log(d1.getTimezoneOffset())
var d2 = new Date('2020/09/15');

var d3 = new Date(1000*3600*24*365)
// console.log(d3)

// console.log(d1.toLocaleDateString()+" "+d1.toLocaleTimeString())

// console.log(String.fromCharCode(97))
var str = 'Tom@补给兵@60%#Mary@医护兵@80%#John@特种兵@30%';
var arr = str.split("#");
console.log(arr)
// console.log(str.charCodeAt());