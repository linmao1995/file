var circie = require('./08_circle')//如果模块后缀名是js，可以省略

// console.log("周长:" + circie.getZ(10))
// console.log("面积:" + circie.getM(10))

// console.log(`周长:${circie.getZ(10)},面积:${circie.getM(10)}`)

// console.log(`周长:${circie.z(10)},面积:${circie.m(10)}`)

//把对象作为导出的一部分
console.log(circie.c.getZ(10),circie.c.getM(10))