import { type } from "jquery";

var abc = 10;
var bcd = { name : 'kim' }

declare global {
    type Dog = string
    // 글로벌 변수
}

export {}
// 로컬 모듈