var n1=1+'2';//'12'   '1'+'2'   拼接 '12'
var n2=2+true;//3
var n3=2+false;//2
var n4=true+'4';//'true4'
//console.log(n4,typeof n4);

/*
var a=5,b=true,c='tedu';
console.log(a+b+c); //'6tedu'
console.log(b+c+a); //'truetedu5'
console.log(c+a+b); //'tedu5true'
*/

//拼接
//假设从服务器端获取到了数据，并保存到了变量中
var title='戴尔燃7000';
var os='windows 10';
//打印出  '商品名称：xxxx  系统：xxxx'
//console.log('商品名称：'+title+'  系统：'+os);
//练习：声明变量保存获取到员工的编号，姓名，性别，打印出以下  '编号：xx  姓名：xx   性别：xx'
var eid=5;
var ename='山田一然';
var sex='男';
//console.log('编号：'+eid+'  姓名：'+ename+'  性别：'+sex);

var m1=5-'3';//2
var m2='5'-'3';//2
var m3='4'*true;//4
//null undefined
var m4='6'/'2';//3
//5-NaN   
var m5='5'-'3a';//NaN  Not a Number 不是一个数字
//1+0
var m6=1+null;//1
//1+NaN
var m7=1+undefined;//NaN
console.log(m7,typeof m7);





