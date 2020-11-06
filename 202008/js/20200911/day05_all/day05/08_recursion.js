//声明变量记录调用的次数
var i=0;
function say(){
  console.log('从前有座山');
  //每打印1次，记录1次
  i++;
  //当i为3的时候，结束函数调用
  if(i===3){
    return;
  }
  say();
}
say();