/*
console.log(1);
console.info(2);
console.warn(3);
console.error(4);

//开始计时
console.time('ran');
for(let i=1;i<=10000;i++){
}
//结束计时
console.timeEnd('ran');
*/
console.time('while');
let i=1;
let sum=0;
while(i<=10000){
  //sum+=i;
  i++;
}
//console.log(sum);
console.timeEnd('while');


