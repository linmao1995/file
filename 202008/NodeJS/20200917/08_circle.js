// 周长
function getZ(r) {
    return (2 * Math.PI * r).toFixed(2);
}

//面积
function getM(r) {
    return (Math.PI * Math.pow(r, 2)).toFixed(2)
}


let circle = {
    getZ: function (r) {
        return (2 * Math.PI * r).toFixed(2);
    },
    getM: function (r) {
        return (Math.PI * Math.pow(r, 2)).toFixed(2)
    }
}

//直接把对象作为导出对象
module.exports = circle
module.exports = {
    z: getZ,
    m: getM,
    c: circle
}

//NodeJS为每个模块准备了两个变量。
// console.log(__filename);//当前模块绝对路径
// console.log(__dirname)//当前模块绝对路径不包含文件名称