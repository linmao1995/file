var i = 1;
while (i <= 10) {
    // console.log(i);
    i++;
}

var b = parseInt(Math.random() * 10);
// console.log(b)

//30-20之间所有整数

var j = 30;
while (j >= 20) {
    if (j % 2 == 0) {
        // console.log(j);
    }
    j--;
}


var m = 0;
while (m <= 90) {
    if (m >= 70) {
        // console.log(m)
    }
    m += 5;
}


var n = 1;
while (n <= 100) {
    if (n % 2 != 0) {
        // console.log(n)
    }
    n++;
}

//分别打印奇数和、偶数和
var k = 1;
var sum = 0;
var _sum = 0;
while (k <= 100) {
    if (k % 2 === 1) {
        sum += k;
    } else {
        _sum += k
    }
    k++;
}
// console.log("奇数和:" + sum);
// console.log("偶数和:" + _sum)


var x = 11;
var totals = 1;
while (true) {
    totals *= x;
    if (x === 20) {
        break;
    }
    x++;
}
// console.log(totals)


// var _n = 1;
var total = 0;
var _total = 0;
for (let i = 1; i < 1000; i += 2) {
    total += (1 / i)
}
for (let j = 0; j <= 100; j++) {
    _total += j;

}
// console.log("total:" + total)
// console.log("_total:" + _total)