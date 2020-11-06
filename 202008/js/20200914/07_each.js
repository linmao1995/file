// 遍历数组
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (var i = 0; i <= arr.length - 1; i++) {
    // console.log(arr[i])
}

for (var key in arr) {
    // 使用for/in遍历，key是下标。
    // console.log(key, arr[key])
}


var salary = [7000, 8000, 9000, 10000];
//for/in遍历
function getTotal() {
    var total = 0;//总工资
    for (var key in salary) {
        total += salary[key];
    }
    return total;
}

// for循环遍历
for (var i = 0, sum = 0; i <= salary.length - 1; i++) {
    sum += salary[i]
}


// console.log(sum, sum / salary.length)
// console.log("总工资:" + getTotal(), "平均:" + getTotal() / salary.length)


// 创建数组，工资，将所有工资在5000以下的加1000；
var arr = [1000, 3000, 2000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 5000) {
        arr[i] += 1000;
    }
}

// console.log(arr)



