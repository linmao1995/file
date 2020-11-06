//全局作用域下创建的函数
//全局函数
function fn(){

}
var a=3;
function fun1(){
  //var a=2;
  //在函数作用域下创建的函数
  //局部函数
  function fun2(){
	//var a=1;
    console.log(a);
  }
  fun2();
}
//fun1();

//在全局调用局部函数
//无法访问
//fun2();

foo();
function foo(){
  console.log(4);
}



