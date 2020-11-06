function add(a,b,c){
  //如何给c设置默认值
  //如果c为undefined，说明未赋值
  /*
  if(c===undefined){
    c=0
  }
  */
  //如果c为true，就继续使用当前的值，否则就使用默认值0
  c=c||0;
  console.log(a+b+c);
}
//add(6000,2000);

//双色球
//红球：在1~33之间随机取6个，不能重复，从小到大排序
//蓝球：在1~16之间随机取1个，可以和之前的6个红球重复
//把取到7个数字放入到数组
//创建数组，用于保存1~33之间所有整数
var arr1=[];
for(var i=1;i<=33;i++){
  arr1.push(i);
}
//console.log(arr1);
//获取随机下标，通过下标找到对应的元素
//循环6次，获取6个随机数字，把它们保存一个新数组
var arr2=[];
for(var i=0;i<6;i++){
  //0~32
  //0~1 * 33(长度)  0~32.x   0~32
  var n=parseInt( Math.random()*arr1.length );
  //通过随机下标获取对应的元素
  //console.log( arr1[n] );
  //把每次获取到的随机保存到数组arr2
  arr2.push( arr1[n] );
  //把获取的元素在原来数组arr1中删除
  arr1.splice(n,1);
}
//将取得6个数字排序
arr2.sort( function(a,b){
  return a-b;
} );
//蓝球：获取1~16之间的一个随机整数
//0~1 * 16  0~15.x  向上取整  0~16
//0~1 * 16  0~15.x  向下取整  0~15 + 1   1~16
var blue=parseInt( Math.random()*16 ) + 1;
//把蓝球添加到数组
arr2.push(blue);
console.log(arr2);








