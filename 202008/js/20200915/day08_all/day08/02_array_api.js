/*
var arr=['李志国','熊杰','石润聪','张福冉','李璟旋','张景元','张浩','山田一然','李文湘'];
//截取
//console.log( arr.slice(2) );
//console.log( arr.slice(2,4) );
//console.log( arr.slice(-3,-1) )

//练习：声明变量保存数组，包含a~g，每个字母是一个元素，分别截取cd，f，最后要拼接成一个大数组。
var arr=['a','b','c','d','e','f','g'];
var arr1=arr.slice(2,4);
var arr2=arr.slice(-2,-1);
//console.log(arr1,arr2);
console.log( arr1.concat(arr2) );

var arr=['李志国','熊杰','石润聪','张福冉','李璟旋','张景元','张浩','山田一然','李文湘'];
//console.log( arr.splice(1) );
//console.log( arr.splice(1,4) );
//console.log( arr.splice(-4,2) );
console.log( arr.splice(-4,0,'王颜宏','孙朝阳') );
console.log( arr );

//练习：声明变量保存数组，包含a~h，每个字母是一个元素，删除de，替换f为z，在下标为1的位置插入m；最后打印数组。
var arr=['a','b','c','d','e','f','g','h'];
console.log(arr.splice(3,2));
console.log(arr.splice(-3,1,'z'));
console.log(arr.splice(1,0,'m'));
console.log(arr);


var arr=['a','b','c','d'];
//翻转数组元素
console.log( arr.reverse() );
console.log(arr);


var arr=[23,9,78,6,45];
//默认按照Unicode码从小到大
//arr.sort();
arr.sort( function(a,b){
  //return a-b;//从小到大
  return b-a;
} );

console.log(arr);
*/

var arr=['李志国','熊杰','石润聪'];
//往末尾添加
//console.log(arr.push('杜江','马刚'));
//删除末尾的元素
//console.log( arr.pop() );
//开头添加
//console.log(arr.unshift('杜江'));
//删除开头的一个
console.log(arr.shift());

console.log(arr);



