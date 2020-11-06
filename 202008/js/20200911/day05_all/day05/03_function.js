//计算任意两个数字相加的和
function add(a,b){//形参,用于接收数据
  //console.log(a+b);
  console.log(a,b);
}
//调用
//add(1,2);//实参，实际要传递的数据
//add(3,5);
//add(6);
//add();
//add(7,8,9);

//练习：创建函数getSum，传递任意一个数字，计算1~该数字之间所有整数的和，调用多次
function getSum(n){
  //计算1~n之间所有整数的和
  for(var i=1,sum=0;i<=n;i++){
    sum+=i;
  }
  console.log(sum);
}
//getSum(100);
//getSum(500);
//getSum(1000);

//练习：创建函数getRun，传递任意两个年份，计算两个年份之间的闰年个数，调用多次
function getRun(n1,n2){
  //计算n1~n2之间所有的闰年
  for(var i=n1,count=0;i<=n2;i++){
    //判断i是否为闰年
	if(i%4===0 && i%100!==0 || i%400===0){
	  count++;
	}
  }
  console.log(count);
}
getRun(2000,2100);
getRun(1949,2020);







