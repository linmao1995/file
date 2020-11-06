// 斐波那契数列     第一项和第二项是1,从第3项开始，每项的值是前两项相加的和
//1 1 2 3 5 8 13 21 34
// 递归
function getNum(n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return getNum(n - 2) + getNum(n - 1);
}
var res = getNum(99);
console.log(res)


// 循环
function get_Num(n) {
    var a = 0;
    var b = 0;
    var res = 0;
    for (var i = 1; i <= n; i++) {
        if (i <= 2) {
            a = 1;
            b = 1;
            res = 1;
        } else {//a=1,b=1=> res=2,,a=1,b=2=> res=3,a=2,b=3=> res=5,a=3,b=5
            res = a + b;
            a = b;
            b = res;
        }
    }
    return res;
}

// var sss = get_Num(99)
// console.log(sss)


// 递归求1-n之间整数和
function getSum(n){
    var sum = 0
    for(var i=n;i>=1;i--){
        if(i===1){
            sum = 1;
        }
    }
}