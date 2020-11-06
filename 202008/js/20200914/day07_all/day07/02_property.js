var laptop={
  title:'小米Air',
  price:4999,
  isOnsale:'是'
}
//检测编号lid是否存在
//console.log( laptop.lid===undefined );
//
//console.log( laptop.hasOwnProperty('lid') );
//
//console.log( 'price' in laptop );

//练习：创建一个员工对象，包含有姓名，性别，工资，如果生日属性不存在添加该属性并赋值，如果工资属性存在，在原来的基础之上加2000；最后打印对象
var emp={
  ename:'然哥',
  sex:'男',
  salary:8000
}
//如果生日属性不存在添加属性
if(emp.birthday===undefined){
  emp.birthday='1977-5-29';
}
//如果工资属性存在，在原来基础之上加2000
if( emp.hasOwnProperty('salary') ){
  emp.salary+=2000;
}
console.log(emp);


