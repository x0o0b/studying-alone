import { type } from "jquery"
// import { Age1 } from './types/common/test'

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

// class Person {
//     name :string;
//     constructor(a :string){
//         this.name = a;
//     }
//     함수(a :string){
//         console.log('안녕' + a);
//     }
// }

// let 사람1 = new Person('kim');
// let 사람2 = new Person('park');
// 사람1.함수('안녕');

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

let 멍멍 :[string, boolean?, number?] = ['dog', true]

function 함수6(...x :[number, string]){
    console.log(x)
}
함수6(1, '43');

let arr = [1,2,3];
let arr2 :[number, number, ...number[]] = [4,5, ...arr];

let food :[string, number, boolean] = ['동서녹차', 4000, true];
let food2 :[string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];

function 함수7 (...rest :[string, boolean, ...(string|number)[] ]) {

}

함수7('ans', false, 25676, 344, '765', 4, 'overwatch')

function 함수8 (...rest :(number|string)[]) {

    let result :[string[], number[]] = [[], []];

    rest.forEach((a)=>{
        if (typeof a === 'string') {
            result[0].push(a);
        } else {
            result[1].push(a)
        }
    })
    return result
}

함수8('b', 5, 6, 8, 'a')

let age :Age1;

// console.log( abc + 1 )

let 이름1 :string = '김';

interface CarType {
    model :string,
    price :number
}

class Carr implements CarType {
    model :string;
    price :number = 1000;
    constructor(a :string) {
        this.model = a
    }
}

let 붕붕이 = new Carr('morning');

interface CarType1 {
    model1 :string,
    tax : (price :number) => number;
}

class carrr implements CarType1 {
    model1; //any 타입됨
    tax (a) { //a 파라미터는 any 타입됨 
        return a * 0.1
    }
}

interface StringOnly {
    age : '20',
    [key : string] : string
}

let user2 :StringOnly = {
    name : 'kim',
    age : '20',
    location : "seoul"
}
interface num {
    [key :number] : string
}

let user3 :num = {
    0 : 'kim',
    1 : '20',
    2 : "seoul"
}

interface MyType {
    'font-size' : MyType | number
}

let css :MyType = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

interface obj1Type {
    [key : string] : string | number
}

let obj1 :obj1Type = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
  }

  interface obj2Type {
    'font-size' :  number,
    [key : string] : obj2Type | number,
}

  let obj2 :obj2Type = {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
  }

interface Person {
    [key :string] : number
}

type PersonKeys = keyof Person;

let a1 :PersonKeys = 'name'

type Car4 = {
    color : boolean,
    model : boolean,
    price : boolean | number
}

type TypeChanger<MyType> = {
    [key in keyof MyType] :string
}

type 새로운타입 = TypeChanger<Car4>

type Bus = {
    color : string,
    model : boolean,
    price : number
  }

type TypeChanger1<MyType> = {
    [key in keyof MyType] :string | number
}

type NewType = TypeChanger1<Bus>

type TypeChanger2<MyType, T> = {
    [key in keyof MyType] :T;
}

type NewBus = TypeChanger2<Bus, boolean>;
type NewBus1 = TypeChanger2<Bus, string[]>