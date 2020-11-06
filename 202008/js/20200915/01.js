var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// 截取 
// console.log(arr.slice(2))//从下标为2开始取
// console.log(arr.slice(2,5))//从下标2开始截取，2 3 4 不包括下标为5
// 负数
// console.log(arr.slice(-4,-2))//从倒数第4个取值，不包括-2


//截取cd，f最后拼接乘一个大数组
var arr1 = arr.slice(2, 4);
var arr2 = arr.slice(5, 6)
// console.log(arr1, arr2)
// console.log("===>" + arr1.concat(arr2))


// splice
var arr_ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//删除de，替换f为z，下标为1插入m，打印数
arr_.splice(3,2);
arr_.splice(3,1,'z');
arr_.splice(1,0,'m')

var a = [1,3,5,4,2];
a.sort(function(a,b){
    return a-b;//从小到大
    // return b-a;//从大到小
});
// console.log(a)//1 2 3 4 5

// push
var b = ['a','b','c']
b.push('d')
// console.log(b)


// unshift
var a = ['a','b','c','d'];
// console.log(a.unshift('1','2'));
console.log(a.shift())
console.log(a)