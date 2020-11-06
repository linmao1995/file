function add(a,b){
  console.log(a+b);
  //返回值，函数调用后得到的结果
  //return a+b;
  return;
  //return执行后，结束函数调用
  console.log('调用结束');
}
//调用函数，得到的是函数体中return后的值
//var n1=add(3000,5000);
//console.log('合计：'+n1);

//练习：创建函数getMax1，传递两个数字，返回最大值；调用多次
function getMax1(a,b){
  /*
  if(a>b){
    return a;
  }else{
    return b;
  }
  */
  return a>b ? a : b;
}
//var r1=getMax1(2,5);
//console.log(r1);

//练习：创建函数getMax2，传递两三数字，返回最大值
function getMax2(a,b,c){
  /*
  if(a>b && a>c){
    return a;
  }else if(b>c){
    return b;
  }else{
    return c;
  }
  */
  var max=a>b ? a : b;
  return max>c ? max : c;
  //return (a>b ? a : b)>c ? (a>b ? a : b) : c;
}
//var r=getMax2(1,8,4);
//console.log(r);
//练习：创建函数getStatus，传递状态码，返回对应的汉字状态，使用switch-case
 //1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消  其它-无法追踪
function getStatus(n){
  switch(n){
    case 1:
	  return '等待付款';
	  //break;
	case 2:
	  return '等待发货';
	  //break;
	case 3:
	  return '运输中';
	  //break;
	case 4:
	  return '已签收';
	  //break;
	case 5:
	  return '已取消';
	  //break;
	default:
	  return '无法追踪';
  }
}
//var r=getStatus(1);
//console.log(r);

//练习：创建函数isRun，传递任意一个年份，返回是否为闰年 是->true 不是->false
function isRun(year){
  //判断year是否为闰年
  /*
  if(year%4===0 && year%100!==0 || year%400===0){
    return true;
  }
  return false;
  */
  return year%4===0 && year%100!==0 || year%400===0;
}
var r=isRun(2021);//true/false
console.log(r);
//如果是闰年打印366，否则打印365
if(r){
  console.log(366);
}else{
  console.log(365);
}



function ran(){
  var d1='鸡翅';
  var d2='菜花';
}
ran();
//外部无法得到
//console.log(d1);


