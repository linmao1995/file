// 创建数组，包含多个姓名，同步方法写入到文件stu.txt
const fs = require('fs');

let path = './stu.csv';

// let arr = ['张三', '李四', '王五', '赵六', '钱七', '孙八', '李九', '周扒皮'];

// let str = '';

// for (var i = 0; i <= arr.length - 1; i++) {
//     // str += arr[i] + '\n';
//     fs.appendFileSync(path, arr[i]+'\n')
// }

// 同步 读取文件
let data = fs.readFileSync(path);
console.log(data.toString())
//异步 读取文件
fs.readFile(path,(error,data)=>{
    if(error){
        throw error
    }
    console.log(data.toString())
})


// fs.unlink(path)

console.log("-------END------")