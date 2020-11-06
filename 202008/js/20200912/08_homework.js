// 创建成绩对象，包含若干个成绩，遍历对象得到每一个成绩，计算出总成绩和平均成绩
var score = {
    yu: 89,
    shu: 70,
    ying: 99,
    zheng: 48,
    shi: 47,
    di: 41,
    sheng: 40
};

function getSum() {
    var sum = 0;
    var total = 0;
    for (var key in score) {
        console.log(key + ":" + score[key])
        sum += score[key]//总成绩
        total += 1;
    }
    console.log("总成绩:" + sum);
    console.log("平均成绩:" + sum / total)
}

getSum();


// 使用递归计算1-n之间整数和（n-1）
//1 2 3  4  5  6  7  8  9  10
//1 3 6 10 15 21 28 36 45  55

var b = 2;
function test2() {
    b = 3;
    console.log(b)
}
// test2()
// console.log(b)


var foo = 1;
function bar() {
    foo = 10;
    return;
    function foo() { }//函数提升，
}
// bar();
// console.log(foo)
