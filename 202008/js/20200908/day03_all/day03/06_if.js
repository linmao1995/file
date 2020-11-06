/*
//满30减20
//总价
var total=30;
//判断总价是否满30
if(total>=30){
  //原来基础之上减20
  total-=20;
}
console.log(total);

//练习：声明变量保存年龄，如果满18岁，打印成年人
var age=10;
if(age>=18){
  console.log('成年人');
  //console.log('终于可以去非洲了');
}
//age>=18 && console.log('成年人');

//隐式转换为布尔型
//false: 0 NaN '' undefined null
if(null){
  console.log('ok');
}

//练习：声明变量保存用户的签名，如果签名内容为空字符，设置默认签名'这家伙很懒，什么也没留下'，最后打印出签名。
//保存签名
var str='';
if(!str){ //str===''
  //设置默认内容
  str='这家伙很懒，什么也没留下';
}
console.log(str);

*/
//判断第一个数字是否为true，如果是true则把第一个数字赋给n，如果是false把第二个数字给n
var n=0||2;//2
//判断第一个数字是否为true，如果是true执行第二个，将第二个数字赋给m；如果是false不再执行第二个，将第一个数字赋给m
var m=1&&2;//2
console.log(m);









