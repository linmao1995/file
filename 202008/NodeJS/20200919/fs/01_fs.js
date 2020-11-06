const fs = require('fs');

// let s = fs.statSync('./test.txt');
// console.log(s)

// 异步stat

// fs.stat('./test.txt', (error, result) => {
//     if (error) {
//         throw error
//     } else {
//         console.log(result)
//     }
// })


// 异步 创建目录

// fs.mkdir('./0001', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("异步创建成功")
// })

// 异步移除目录
fs.rmdir('./0001', (err) => {
    if (err) {
        throw err
    }
    console.log("目录移除成功")
})


console.log("-----End--------")