//创建带参数的函数。
function getSum(n1, n2) {
    return n1 + n2;
}

var sum = getSum(10, 12, 22, 69);
// console.log(sum)

// 定义一个函数可传递3个参数，返回3个数中最大的数。
function getMax(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n3) {//n1<n2,n1<n3
        return n2;
    } else {
        return n3;
    }
}
//1,2,3     1,3,2  2,1,3 2,3,1 3,1,2 3,2,1
var n1 = getMax(1, 2, 3)
// console.log(n1)



// 传递两个值，获取最大值。
function get_Max(m, n) {
    if (m > n) {
        return m;
    } else {
        return n;
    }
    //三目运算符
    // return m-n>0?m:n
}

var res = get_Max(65, 36);
// console.log(res)


function get_Max2(a, b, c) {
    var max = a > b ? a : b;
    return max > c ? max : c;
    // return (a > b ? a : b) > c ? (a > b ? a : b) : c
}
var res = get_Max2(6, 4, 3);
// console.log(res)




// 创建函数，判断状态。
function getStatus(n) {
    switch (n) {
        case 1:
            return "等待付款";
        case 2:
            return "等待发货";
        case 3:
            return "运输中";
        case 4:
            return "已签收";
        case 4:
            return "已取消";
        default:
            return "其他__";
    }
}

var s = getStatus(9);
// console.log(s)


// 传递任意一个年份，闰年返回true，否者false。
function getYear(n) {
    // var res = (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0;
    // return res ? true : false;

    // if-else简化
    /*
    if((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0){
        return true;
    }else{
        return false;
    }
    */
    return (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0;

}
var res = getYear(2000);
console.log(res)