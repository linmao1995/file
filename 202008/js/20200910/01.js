var m = 5;

//上三角
for (var i = 1; i <= m; i++) {
    var str = '';
    for (var j = 1; j <= (m - i); j++) {
        str += ' ';
    }
    for (var n = 1; n <= 2 * i - 1; n++) {
        str += '*'
    }
    // console.log(str)
}

// 下三角
for (var i = 1; i <= m; i++) {
    var str = '';
    // for (var a = 1; a <= i - 1; a++) {
    //     str += ' ';
    // }
    for (var b = 2*m-1; b<=2*i-1; b++) {
        str += '*'
    }
    console.log(str)
}


for (var i = 1; i <= m; i++) {
    var str = '';
    for (var a = 1; a <= i; a++) {
        str += '*';
    }
    // console.log(str)
}



for (var i = 1; i <= m; i++) {
    var str = '';
    for (var a = 1; a <= m - i; a++) {
        str += ' ';
    }
    for (var b = 1; b <= i; b++) {
        str += '*'
    }
    // console.log(str)
}


for (var i = 1; i <= m; i++) {
    var str = '';
    for (var b = 1; b <= i - 1; b++) {
        str += ' '
    }
    for (var a = 1; a <= m - i + 1; a++) {
        str += '*'
    }
    // console.log(str)
}


for (var i = 1; i <= m; i++) {
    var str = '';
    for (var a = 1; a <= m - i + 1; a++) {
        str += '*'
    }
    // console.log(str)
}



//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// 9行

// 1,1
// 2,3
// 3,5
// 4,7,
// 5,9
// 6,7
// 7,5
// 8,3
// 9,1

// for(var i=1;i<=m;i++){
//     var str = '';

// }
