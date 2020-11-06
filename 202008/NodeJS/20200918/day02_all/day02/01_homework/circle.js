//创建两个函数
//计算周长
function getLen(r){
  return 2*Math.PI*r;
}
//计算面积
function getArea(r){
  return Math.PI*Math.pow(r,2);
}
let person={
  id: 1,
  name: '然哥'
}

//导出
/*
module.exports={
  len: getLen,
  area: getArea,
  p: person  //把对象person做导出对象的一部分
}
*/
//直接把对象person作为导出的对象
module.exports=person;

//Nodejs为每个模块准备了两个变量
//console.log( __filename );
//console.log( __dirname );