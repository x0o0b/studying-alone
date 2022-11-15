import { type } from "jquery"

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

function Hamsu (a :string|undefined) {
    if ( a && typeof a === 'string') {

    }
}

type Fish = {swim :string}
type Bird = {fly :string}

function Hamsu1(animal :Fish|Bird) {
    if ('swim' in animal) {

    }
}

type Car1 = {
    wheel : '4개',
    color : string
}

type Bike = {
    wheel : '4개',
    color : string
}


function Hamsu2(x :Car1|Bike) {
    if (x.wheel === '4개') {
        console.log('x는 Car1타입이에요');
    }
}

function 함수3 () :never {
    throw new Error()
}

class user {
    name :string;
    private familyName :string = 'kim'
    constructor(a){
        this.name = a + this.familyName
    }

    namechange(b){
        this.familyName = b
    }
}

let user1 = new user('민수')
user1.namechange('park')
console.log(user1)

class Person1 {
    constructor(public name :string){

    }
}

let baby = new Person1('kim');
console.log(baby)

class User {
    protected x = 10;
}

class NewUser extends User {
    doThis(){
        this.x = 20;
    }
}

class User1 {
    static x = 10;
    y = 20;
}

let 자식 = new User1();
// console.log(자식.x); 안됨
console.log(User1.x); //됨

// private / protected / public + static 가능

class User2 {
    static skill = 'js'
    intro = User2.skill + ' 전문가입니다.'
}
let 철수 = new User2();
console.log(철수)

User2.skill = 'ts'

let 철수1 = new User2();
console.log(철수1)

class User3 {
    private static x = 10; //남들에게 보여주지 않고 수정 불가능함
    public static y = 20; //남들에게 보여주지  않고 수정 가능
    protected z = 30; //솔직히 몰루 ㅋㅋ
}

import {이름, 나이, Name, Car2, Bike1, 아무거나} from './a'
let avs :Name = 'Park'
console.log(이름);

let 짜동짜 :Car2 = { wheel : 4, model : '쏘나따'}

let dkanrjsk :아무거나 = function(a) {
    console.log(a);
}

dkanrjsk({adsf : '안영'});

namespace 야임스페이스 {
    export type Dog = string;
}
interface Dog { name : string };    

let dog1 :야임스페이스.Dog = 'bark';
let dog2 :Dog = { name : 'paw' }

function 함수4<MyType>(x :MyType[]) :MyType {
    return x[0]
}

let a = 함수4<number>([4,2])
let b = 함수4<string>(['4','2'])
console.log(a)

interface LengthCheck {
    length : number
}

function 함수5<MyType1 extends LengthCheck>(x :MyType1) {
    return x.length
}

let c = 함수5<string[]>(['100'])

function Lengthcheck<type extends string|string[]>  (x :type) {
    console.log(x.length)
}
Lengthcheck<string>('hello') 
Lengthcheck<string[]>(['kim','park'])

interface Animal {
    name : string;
    age : number 
}

let data = '{"name" : "dog", "age" : 1 }';

function Animal<MyType>(x :string) :MyType {
    return JSON.parse(x);
}

let bdf = Animal<Animal>(data);
console.log(bdf);