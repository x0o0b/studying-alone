function sayHi(x? :string ){
    if (x) {
      console.log('안녕하세요 ' + x)
    } else {
      console.log('왜입력안함')
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

function 함수 (a : 'hello' ) : 1 | 0 {
    return 0
}

function rsp (a : '가위'|'바위'|'보') :('가위'|'바위'|'보')[] {
    return ['가위']
}

var 자료 = {
    name : 'kim'
}

let 제목 = document.querySelector('#title');

if(제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}

let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement){
    링크.href = 'http://kakao.com'
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function(){

})

let 이미지 = document.querySelector('#image')
if(이미지 instanceof HTMLImageElement){
    이미지.src = 'new.jpg'
}

var 링크1 = document.querySelectorAll('.naver');

링크1.forEach((a)=>{
    if (a instanceof HTMLAnchorElement) {
        a.href = 'http://kakao.com';
    }
})

class Person {
    name :string;
    constructor(a :string){
        this.name = a;
    }
    함수(a :string){
        console.log('안녕' + a);
    }
}

let 사람1 = new Person('kim');
let 사람2 = new Person('park');
사람1.함수('안녕');

class Car {
    model :string;
    price :number;
    constructor(model :string, price :number){
        this.model = model;
        this.price = price;
    }
    tax() :number{
        return this.price * 0.1;
    }
}

let car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300

class Word {
    num;
    str;
    constructor(...param){
        let number :number[] = [];
        let string :string[] = [];

        param.forEach((i)=>{
            if (typeof i === 'string') {
                string.push(i);
            } else {
                number.push(i);
            }
        })

        this.num = number;
        this.str = string;
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park'] 

type UserType = {
    user : string,
    comment : number[],
    admin : boolean
}

function 함수1({user, comment, admin} :UserType) :void{
    console.log(user, comment, admin)
  }

함수1( { user : 'kim', comment : [3,5,4], admin : false })

type UserType1 = (number|string|boolean)[];

function 함수2([num, name, bool] :UserType1 ) :void{
    console.log(num, name, bool);
}

함수2([40, 'wine', false]);