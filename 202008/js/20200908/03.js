var str = 'hello world';
// if(str===''){
//     str = '这家伙很懒，什么也没留下。'
// }
if(!str){
    str = '..........';
}
if(str.length==0){
    str = '这家伙很懒，什么也没留下。'
}
console.log(str)