//声明变量保存圆的半径，声明常量保存圆周率，将计算的面积和周长分别保存到变量；最后打印出周长和面积
var r=5;
const pi=3.14;
var area=pi*r*r;
var len=2*pi*r;
//console.log(area,len);
//console.log(0.1+0.2);

//交换两个变量
var a=1,b=2;
//准备第3个变量，把a的值存下来
var c=a;
//把b的值赋给a
a=b;
//把a的值给b，a已经存到了c中
b=c;
console.log(a,b);
