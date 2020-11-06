// console对象
// console.log(1);
// console.info(2);
// console.warn(3);
// console.error(4)

// 开始计时
console.time("a");
// for(let i=0;i<=100000000;i++){
// }

//while循环计算1-10000
let i = 1;
let sum = 0
while(i<=10000){
    sum += i;
    i++;
}
console.log(i,sum)
console.timeEnd("a")