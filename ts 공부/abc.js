function sayHi(x) {
    if (x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('왜입력안함');
    }
}
// function jari(a?:number|string){
//     return a.toString().length
// }
// function weding(b?:number,c? :boolean,d? :string){
//     let score :number = 0;
//     score = score + b;
//     if(c == true){
//         score = score + 500;
//     }
//     if(d == "상"){
//         score = score + 100;
//     }
//     if(score >= 600) {
//         return "결혼가능"
//     } else {
//         return "니는 평생 모솔아다"
//     }
// }
function 함수(a) {
    return 0;
}
function rsp(a) {
    return ['가위'];
}
var 자료 = {
    name: 'kim'
};
var 제목 = document.querySelector('#title');
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'http://kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
}
var 링크1 = document.querySelectorAll('.naver');
링크1.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'http://kakao.com';
    }
});
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
사람1.함수('안녕');
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var number = [];
        var string = [];
        param.forEach(function (i) {
            if (typeof i === 'string') {
                string.push(i);
            }
            else {
                number.push(i);
            }
        });
        this.num = number;
        this.str = string;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park'] 
