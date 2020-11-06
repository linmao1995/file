/*
//console.log(a);
//var a=1;
var c=3;
var c=4;

//不存在提升
let b=2;
console.log(b);
//同一作用域下，不允许重复声明同一个变量
let d=3;
//let d=4;


//块级作用域 大括号之间的语句
{
  //局部变量
  let n1=2;
}
console.log(n1);


//使用for循环计算1~100之间所有整数的和，变量使用let声明
let sum=0;
for(let i=1;i<=100;i++){
  sum+=i;
}
console.log(sum);
*/

//2.箭头函数
var arr=[23,9,78,6,45];
//排序
/*
arr.sort( function(a,b){
  return a-b;
} );

arr.sort( (a,b)=>{
  return a-b;
} );

arr.sort( (a,b)=>a-b );
console.log(arr);


//练习：使用匿名函数创建函数 ，把匿名函数改为箭头函数，计算任意两个数字相加的和，并返回结果。
let add=(a,b)=>a+b;
console.log( add(2,3) );


let name='然哥';
let sex=0;
let phone='18112345678';

//模板字符串
console.log(`
  姓名：${name}
  性别：${sex ? '男' : '女'}
  手机：${phone}
`);
*/
//练习：假设从后端获取到了一条商品的数据，格式为对象，分别有商品的编号，标题，价格，最后打印出以下格式
let laptop={
  lid:2,
  title:'小米Air',
  price:3799
};
console.log(`
  编号：${laptop.lid}号
  标题：${laptop.title}
  价格：${laptop.price.toFixed(2)}元
`);







