/*
//判断一个人是否为成年人
var age=18;
if(age>=18){
  console.log('成年人');
}else{
  console.log('未成年人');
}

//练习：声明变量保存用户名和密码，如果用户名是root，并且密码是123456，打印登录成功，否则打印登录失败
var uname='root';
var upwd='666666';
if(uname==='root' && upwd==='123456'){
  console.log('登录成功');
}else{
  console.log('登录失败');
}
*/
//练习：数据库中存储性别方式(1/0)，假设获取到的性别的值保存到变量中，如果是1，打印男，否则（0）打印女
var sex=0;
if(sex){
  console.log('男');
}else{
  console.log('女');
}

var s= sex ? '男' : '女';
console.log(s);



