// 倒转数组
var arr = ['a', 'b', 'c', 'd', 'e'];
var newarr = [];
for (var i = arr.length - 1; i >= 0; i--) {
    newarr[arr.length - i - 1] = arr[i]
}

// console.log(newarr)

// 冒泡排序,交换，循环嵌套。
var arr = [10, 6, 8, 7, 3, 9, 1, 5, 4, 2]; //10


for (var i = 0; i <= arr.length - 1; i++) {//外层循环，控制循环轮数，比元素个数小1
    //每一轮的次数 = 数组长度-i，内存循环：控制每一轮循环的次数，每一轮都是从第一个元素开始。
    for (var j = 0; j <= arr.length - i - 1; j++) {
        //假设arr[j]最大。arr[j]和arr[j+1]交换
        if (arr[j] > arr[j + 1]) {//1 2 3 4 5 6 7 8 9 10
            var temp = arr[j + 1];//定义一个存储较小值
            arr[j + 1] = arr[j];//较大值向右移动。
            arr[j] = temp;//存储的小值留在左边。
        }
    }
}
// console.log(arr)



for (var i = 0; i <= arr.length - 1; i++) {
    for (var j = 0; j <= arr.length - i - 1; j++) {//10个数交换9次。
        //假设arr[j]最大。arr[j]和arr[j+1]交换
        if (arr[j] < arr[j + 1]) {//10 9 8 7 6 5 4 3 2 1
            var temp = arr[j + 1];//定义一个存储较小值
            arr[j + 1] = arr[j];//较大值向右移动。
            arr[j] = temp;//存储的小值给右边。
        }
    }
}
console.log(arr)

