function ran(madai){//形参，接收传递的函数
  console.log('然哥开始跑第1棒');
  console.log('然哥到达第1棒终点');
  //madai=dong
  //madai=function(){}
  //madai()//dong()
  //调用传递的函数
  madai();
}
function dong(){
  console.log('东哥开始跑第2棒');
  console.log('东哥到达了终点');
}
//dong以实参形式传递进去，叫回调函数
//ran( dong );
//匿名函数以实参形式传递，叫回调函数
ran( function(){
  console.log('陌生人从麻袋中跑了出来');
} );
