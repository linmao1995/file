// 创建数组，包含多个汽车品牌名称，数组长度为5
var guo = [];
// guo[guo.length] = '中国';
// guo[guo.length] = '韩国';
// guo[guo.length] = '朝鲜';
// guo[guo.length] = '巴基斯坦';

// console.log(guo)


var emp = [
    { id: 1001, name: '张三' },
    { id: 1002, name: '李四' },
    { id: 1003, name: '王五' },
    { id: 1004, name: '赵六' },
    { id: 1005, name: '钱七' }
];

for (var key in emp) {
    // console.log(key,emp[key])
}

// console.log(emp)

// 创建对象，对象里姓名，性别，选修课程。
var student = {
    name: "张三",
    sex: 1,
    clazz: [
        '语文', '数学', '英语'
    ]
}

// console.log(student)