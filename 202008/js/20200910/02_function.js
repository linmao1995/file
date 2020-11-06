var sum = 0;
var sums = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        ou(i)
    }
    if (i % 2 !== 0) {
        ji(i)
    }
}
console.log("偶数和:" + sum)
console.log("奇数和:" + sums)

//偶数调用,求偶数和。
function ou(s) {
    sum += s;
}

function ji(s) {
    sums += s
}