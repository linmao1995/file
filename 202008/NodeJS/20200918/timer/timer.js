// timer全局API，不需要引入

// 全局函数
// 一次性定时器
// let timer = setTimeout(()=>{//开始
//     console.log("炸弹爆炸了")
// },5000)

//清除定时器,需要把开启的定时器存到变量
// clearTimeout(timer)

// 周期性定时器
// let t = setInterval(()=>{
//     while(true){
//         let i = 1
//         console.log(`炸弹爆炸第${i}次`)
//         i++;
//     }
// },1);

// clearInterval(t)

// var total = 1;
// let t = setInterval(() => {
//     console.log("炸弹爆炸了");
//     total++;
//     if (total == 4) {
//         clearInterval(t)
//     }
// }, 1000)


// 立即执行定时器,setImmediate、process.nextTick
console.log(2)

setImmediate(()=>{
    console.log("Duang~~~~")
})

process.nextTick(()=>{//
    console.log("444")
})


console.log(3)