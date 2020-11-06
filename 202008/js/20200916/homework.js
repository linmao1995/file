var arr = [];
//1-33 0-34
for (var i = 0; i <= 5; i++) {
    var red = parseInt(Math.random() * 33) + 1;//红球
    if (arr.length === 0) {
        arr.push(red)
    } else {
        for (var a = 0; a < 1;) {
            if (arr.indexOf(red) === -1) {
                arr.push(red);
                break;
            } else {
                var red = parseInt(Math.random() * 33) + 1;
            }
        }
    }
}

arr.sort((a,b)=>a-b)

//蓝球
var blue = parseInt(Math.random() * 16) + 1;
arr.push(blue)

console.log(arr)