//1.使用数组遍历，将一组元素实现翻转
/*
var arr=['a','b','c','d'];
//准备新数组，用于存放倒着找到的元素
var arr2=[];
//遍历数组
for(var i=0;i<arr.length;i++){
  //i 长度
  //0  4   3
  //1  4   2
  //2  4   1
  //3  4   0
  //对应的下标=数组的长度-i-1
  //console.log(arr.length-i-1, arr[arr.length-i-1]);
  //把找到的元素放入到新数组arr2
  arr2[i]=arr[arr.length-i-1];
}
console.log(arr2);
*/
//2.使用数组遍历，将一组数字实现从小到大的排序
var arr=[23,9,78,6,45]
//外层循环：控制循环的轮数，比元素的个数小1
for(var i=1;i<arr.length;i++){
  //i 长度
  //1  5  4
  //2  5  3
  //3  5  2
  //4  5  1
  //每一轮的次数=数组的长度-i
  //内层循环：控制每一轮循环的次数，每一轮都是从第1个元素开始往后不断的比较
  for(var j=0;j<arr.length-i;j++){
    //每次循环，都是用当前的元素arr[j]和下一个元素arr[j+1]进行比较
	//如果当前元素大于下一个元素，则位置交换
	if(arr[j]>arr[j+1]){
	  var c=arr[j];
	  arr[j]=arr[j+1];
	  arr[j+1]=c;
	}
  }
}
//循环结束，交换结束
console.log(arr);



