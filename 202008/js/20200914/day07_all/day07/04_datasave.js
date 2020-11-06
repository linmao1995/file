/*
var a=1;
//把a的值赋给b
var b=a;
//改变a的值
a=2;
console.log(b);
*/

//引用类型数据存储
var ran={
  color:'荧光绿',
  size:'XXXL'
}
//把一个对象的变量赋给另一个变量，两个变量指向同一个对象
var dong=ran;
dong.color='红色';
//console.log(ran);

ran.size='XXL';
//console.log(dong);
//console.log(ran);
//console.log(ran===dong);
//销毁引用类型数据
ran=null;
dong=null;


var p1={  
  id:2,
  title:'小米air'
}
var p2={
  id:2,
  title:'小米air'
}
//比较的地址
console.log(p1===p2);











