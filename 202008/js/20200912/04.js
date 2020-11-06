function getRes(fun, fun2) {
    console.log(fun(100))
    console.log(fun2())
}

//1-00和    回调函数
function getSum(n) {
    for (var i = 1, sum = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//1-10阶乘  回调函数
function getChen() {
    for (var i = 1, res = 1; i <= 10; i++) {
        res *= i;
    }
    return res;
}
//回调函数 getSum,getChen
getRes(getSum, getChen)
// getRes(getChen)