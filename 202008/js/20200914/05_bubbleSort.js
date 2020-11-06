//遍历数组，获取最大值。
var arr_1 = [3, 2, 1, 4, 5]
//假设arr_1[0]是最大值
var max = arr_1[0];
for (var i = 0; i <= arr_1.length - 1; i++) {
    if (max < arr_1[i]) {//max和每一个比较，大的赋值给max
        max = arr_1[i]
    }
}
console.log(max)