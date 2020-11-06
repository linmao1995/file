//创建函数————函数声明
function fn(){
}
//匿名函数创建————函数表达式
//变量名称就是函数名称
var fun=function(){  
  console.log(1);
}
console.log( fun );
console.log( fn );
//调用
//fun();
//练习：使用匿名函数创建函数，传递任意两个数字，返回两个数字之间所有整数的和
//var add;
/*
var add=function(n1,n2){
  //n1~n2之间所有整数的和
  for(var i=n1,sum=0;i<=n2;i++){
    sum+=i;
  }
  return sum;
}
console.log( add(1,100) );
*/






