// 创建Buffer
let buf = Buffer.alloc(9,'abc小小')//5个字节 代表分配5个字节的空间
console.log(buf) //<Buffer 61 62 63 64 65> 16进制
// console.log(String(buf))
console.log(buf.toString())