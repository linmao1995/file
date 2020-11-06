/*
var arr=['王涛','邱聪聪','李志国','刘方磊','张思遥'];
//for-in
for(var k in arr){
  //k 代表下标
  console.log(k,arr[k]);
}
*/
//练习：创建数组，包含有一组成绩，遍历数组计算出总成绩和平均成绩
/*
var score=[72,83,65,97];
var sum=0;
for(var k in score){
  //console.log(k,score[k]);
  //把每一个成绩加到sum
  sum+=score[k];
}
console.log(sum, sum/score.length);

//使用循环遍历数组 下标
var score=[72,83,65,97,91,51,46];
//0~3
for(var i=0;i<score.length;i++){
  //score[i] 代表下标对应的元素
  console.log(i, score[i]);
}

//练习：创建数组，包含有一组工资，要求将所有工资在5000以下的加1000，最后打印数组
var salary=[2000,7000,5000,4010,3500];
for(var i=0;i<salary.length;i++){
  //console.log(i,salary[i]);
  //如果工资小于5000，则这个元素在原来基础加1000
  if(salary[i]<5000){
    salary[i]+=1000;
  }
}
console.log(salary);
*/
//练习：创建数组，包含有一组数组，遍历数组从找到最大值
var arr=[6,9,45,23,78];
//声明变量用于保存最大值，假设第1个元素是最大值
var max=arr[0];
//遍历数组元素，让max和每个元素比较
//从下标1开始，排除第1个和自己比较
for(var i=1;i<arr.length;i++){
  //arr[i]代表每个元素
  //如果max小于任意一个元素，则把该元素放入到max中
  if(max<arr[i]){
    max=arr[i];
  }
}
//遍历结束后，max保存了最大值
console.log(max);




