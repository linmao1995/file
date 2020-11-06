//变量提升,JS程序执行前，会将var声明的变量提升到所在作用域的最前边，只是提升声明，赋值不提升。
/*
//var a;
console.log(a);
var a=1;
//a=1;


function fn(){
  //var b;
  console.log(b);
  var b=2;//提升到fn函数内的最前边
  //b=2;
}
fn();


var c=5;
function fun(){
  //var c;//undefined
  console.log(c);
  var c=7;
}
fun();


function foo(n){
  //参数属于局部变量
  //console.log(n);
}
foo(2);
//外部访问不到参数
//console.log(n);

*/

var m=4;//全局变量
function bar(m){
  //m=7;//形参属于 局部变量
  //访问到当前作用域的m，不会访问全局的m
  m=m+3;
}
bar(7);
//在全局作用域下，访问的全局的m
console.log(m);//?







