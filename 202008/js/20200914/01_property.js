var obj = {
    name: "张三",
    sex: 1,
    salary: 8000
}
//if(!obj.birthday){}
if(obj.birthday===undefined){
    obj.birthday = '1995-06-07'
}
// if (!('birthday' in obj)) {
//     obj.birthday = '1995-06-07'
// }
if (obj.hasOwnProperty('salary')) {
    obj.salary += 2000
}
console.log(obj)