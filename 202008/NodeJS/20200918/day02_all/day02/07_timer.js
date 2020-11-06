//全局函数
/*
//1.一次性定时器
//开启
let timer=setTimeout( ()=>{  
  console.log('嘣嘣嘣');
},3000 );
//清除
clearTimeout(timer);


//2.周期性定时器
let timer=setInterval( ()=>{
  console.log('滴滴滴');
},2000 );
clearInterval(timer);
*/
//练习：打印3次然哥后，结束定时器
//声明变量记录次数
let i=0;
let timer=setInterval( ()=>{
  console.log('然哥');
  //每次打印完，加1
  i++;
  //当i为3的时候，清除定时器
  if(i===3){
    clearInterval(timer);
  }
},1500 );
console.log(i);
/*
//3.立即执行定时器
console.log(2);

setImmediate( ()=>{
  console.log(1);
} );
process.nextTick( ()=>{
  console.log(4);
} );

console.log(3);
*/






