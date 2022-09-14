function sayHi(x) {
    if (x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('왜입력안함');
    }
}
function jari(a) {
    return a.toString().length;
}
function weding(b, c, d) {
    var score = 0;
    score = score + b;
    if (c == true) {
        score = score + 500;
    }
    if (d == "상") {
        score = score + 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
    else {
        return "니는 평생 모솔아다";
    }
}
