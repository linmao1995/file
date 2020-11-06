//for打印1-10所有整数.
for (var i = 1; i <= 10; i++) {
    // console.log(i+"\r")
}

//打印60、63、66、69、72
for (var i = 60; i <= 72; i += 3) {
    // console.log(i)
}

//计算1-100之间能被7整除的和。
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        sum += i;
    }
}
// console.log(sum)

//打印2000-2100之间闰年。
for (var i = 2000; i <= 2100; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
        // console.log(i)
    }
}


//10000,
var total = 10000;
for (var i = 1; i <= 5; i++) {
    total += (total * 0.03)
}
console.log(total)