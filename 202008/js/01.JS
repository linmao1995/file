var a = 2;
var b = 7;
var c;
c = a + b;
a = c-a;
b = c-a;
console.log("a:"+a,"b:"+b,"c:"+c)

//不使用第三方变量。
var _a = 2;
var _b = 7;
_a = _a + _b;
_b = _a - _b;
_a = _a - _b;
console.log(_a,_b)