console.log('这是然哥的眼睛模块');
//变量和函数不是全局的，不能被外部所使用
//存在于模块作用域下，都是局部的
var a=1;
function fn(){
  return 2;
}
//导出后，外部才可以使用
//module 当前模块对象
//module.exports   当前模块导出的内容，默认是一个空对象，如果要导出内容，往这个对象下添加
module.exports={
  lid:7,
  a2:a,
  fn2:fn
}