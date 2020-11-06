//打印递减70、65、60、55、50
var i = 70;
do {
    // console.log(i);
    i -= 5;
} while (i >= 50)

//1-100之间能被7整除的数字。
var a = 1;
do {
    if (a % 7 === 0) {
        // console.log(a);
    }
    a++;
} while (a <= 100)

//1-100之间能被3整除的数字之和
var b = 1;
var sum = 0;
do {
    if (b % 3 === 0) {
        sum += b;
    }
    b++;
} while (b <= 100)
// console.log(sum)

//计算1-20之间所有偶数乘积
var i = 1;
var s = 1;
do {
    if (i % 2 === 0) {
        s *= i
    }
    i++;
} while (i <= 20)
// console.log(s)


//循环弹出提示框，
