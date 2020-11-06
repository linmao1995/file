/*
//1-瓦坎达   2-印度   3-日本  其它-八宝山
var n=4;
if(n===1){
  console.log('瓦坎达');
}else if(n===2){
  console.log('印度');
}else if(n===3){
  console.log('日本');
}else{
  console.log('八宝山');
}

//练习：根据数据库中订单的状态码打印对应的汉字状态
//1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消   其它-无法追踪
var status;
if(status===1){
  console.log('等待付款');
}else if(status===2){
  console.log('等待发货');
}else if(status===3){
  console.log('运输中');
}else if(status===4){
  console.log('已签收');
}else if(status===5){
  console.log('已取消');
}else{
  console.log('无法追踪');
}
*/
//练习：判断一个人的成绩
//不在0~100之间   ‘非法的成绩’
//90~100   优秀
//80~90以下   良好
//70~80以下   中等
//60~70以下   及格
//60以下      不及格
var score=41;
if(score>100 || score<0){
  console.log('非法的成绩');
}else if(score>=90){//>=0  score<=100
  console.log('优秀');
}else if(score>=80){//score<90
  console.log('良好');
}else if(score>=70){//score<80
  console.log('中等');
}else if(score>=60){ //score<70
  console.log('及格');
}else{  //score<60
  console.log('不及格');
}
//练习：判断银行存款
//0~100000以下         普通客户
//100000~1000000以下   优质客户
//1000000~5000000以下  黄金客户
//5000000~             钻石客户
var money=8000000;
if(money>=0 && money<100000){
  console.log('普通客户');
}else if(money<1000000){ //>=100000
  console.log('优质客户');
}else if(money<5000000){ //money>=1000000
  console.log('黄金客户');
}else{  //>=5000000
  console.log('钻石客户');
}