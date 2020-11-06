console.time("qiu")
// 1、双色球，6只红球，不能重复，从小到大，1-33
// 蓝球：1-16，可与红球重复
//可循环生成
var red = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'];
var blue = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16']

var arr = [];

for (var i = 0; i <= 5; i++) {

    var n = parseInt(Math.random() * red.length); //0-32随机整数

    arr.push(red[n]); //加入arr

    red.splice(n, 1); // array.splice(start,count) 从red中删除red[n]
}

// 数组排序
// arr.sort((a, b) => a - b)
arr.sort(function (a, b) {
    return a - b;
})

var n2 = parseInt(Math.random() * 16) + 1;

arr.push(n2)

console.log(arr)

console.timeEnd("qiu")