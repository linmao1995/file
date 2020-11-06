// 使用对象字面量创建对象
var HUAWEI = {
    //属性
    color: "black",
    size: 5.5,
    'made-in': 'china',
    // 方法
    getyear: function () {
        return 18;
    },
    getletter: function () {
        return "我与人间全无敌，不与天战与谁战 --柳白";
    }
};

// console.log(HUAWEI.color)
// console.log(HUAWEI)


// 创建员工对象编号，姓名，性别，生日，工资，所属部门
var emp = {
    eid: 1001,
    ename: '张三',
    sex: '男',
    birthday: '1995-06-07',
    salary: 9999.00,
    dept_name: '研发部',
    'dept-id': 20,
};
// 重新赋值
emp.sex = '女'
// 访问对象的属性
// console.log(emp.ename)
// 访问对象中属性含有特殊字符的属性
// console.log(emp['dept-id'],emp['ename'])



// 创建一本图书对象，编号、书名、价格、作者。打印图书标题，对价格赋值，添加出版社属性。打印图书
var book = {
    id: 100001,
    bname: '三国演义',
    price: 199.00,
    author: '罗贯中',
}
// console.log(book.bname);
book.price = 99.00;
// 添加属性
book.address = "清华出版社";
// 添加方法
book.getinfo = function () {
    return "三国";
};
// console.log(book)
// console.log(book.getinfo())


