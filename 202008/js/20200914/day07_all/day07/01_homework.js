//创建成绩对象，包含有若干个成绩，遍历对象得到每一个成绩，最后计算出总成绩以及平均成绩
var score={
  s1:70,
  s2:83,
  s3:69,
  s4:91
};
//遍历对象
var sum=0;
//声明变量用于记录属性的个数
var i=0;
for(var k in score){
  //每循环一次找一个属性，记录一次
  i++;
  //console.log(k,score[k]);
  //把每个成绩加到sum中
  sum+=score[k];
}
console.log(sum,i,sum/i);
