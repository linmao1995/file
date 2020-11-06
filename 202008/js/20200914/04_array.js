// 使用数组字面量创建数组,数组也是对象。
var arr1 = [1, 2, 3, 4];
// 内置构造函数
var arr3 = new Array(3);//==========>代表数组arr3由3个元素。

var arr2 = new Array();
arr2[0] = "A";
arr2[1] = "B"
arr2[2] = "C";
var arr3 = new Array('北京', '天津');
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

var array = [{ a: 1, b: 2 }, { c: 4, d: 5 }]
// console.log(array,typeof array)

// 创建数组
var arr = ['联想', '小米', '戴尔'];
var city = ['北京市', '天津市', '上海市'];
city[2] = "重庆市";
city[3] = "天津市";
city[5] = "湖北省";
console.log(arr)
console.log(city)

//遍历数组
for (var key in city) {
    console.log(key, city[key])
}

// for循环遍历数组
for (var i = 0; i <= city.length - 1; i++) {
    // console.log(i, city[i])
}

