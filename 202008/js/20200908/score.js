var score = 809;
var a = parseInt(score / 10)
switch (true) {
    case score < 0 || score > 100:
        console.log("数据无效");
        break;
    case score >= 90 && score <= 100:
        console.log("优秀");
        break;
    case score >= 80:
        console.log("良好");
        break;
    case score >= 70:
        console.log("中等");
        break;
    case score >= 60:
        console.log("及格");
        break;
    default:
        console.log("不及格");
}


var new_score = 49;
var b = new_score / 10;
if (b < 0 || b > 10) {
    console.log("成绩无效")
} else {
    switch (parseInt(b)) {
        /*
        case 10:
        case 9:
            console.log("优秀");
            break;
        */
        case 10:
        case 9:
            console.log("优秀");
            break;
        case 8:
            console.log("良好");
            break;
        case 7:
            console.log("中等");
            break;
        case 6:
            console.log("及格");
            break;
        default:
            console.log("不及格")
    }
}