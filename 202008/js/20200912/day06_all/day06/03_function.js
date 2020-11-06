//全局污染：全局变量的出现影响到了其它的变量
//避免全局污染：使用局部变量
//轮播图
//匿名函数自调用
(function(){
  var num=2;
  console.log(num);
})();
//使用匿名函数自调用封装以下两块功能
//楼层切换
(function(){
  var num=1;
  console.log(num);
})();
//轮播图2
(function(){
  var num=4;
  console.log(num);
})();

