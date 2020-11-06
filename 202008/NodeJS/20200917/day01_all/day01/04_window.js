//创建函数fn和变量a，然后使用全局window访问
var a=1;
function fn(){
  return 2;
}
//全局作用域
console.log( window.a );
console.log( window.fn() );