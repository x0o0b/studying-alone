"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*eslint-disable*/
var react_1 = require("react");
require("./App.css");
function say(x) {
    if (x) {
        console.log("안녕하세요 " + x);
    }
    else {
        console.log("이름이 없음");
    }
}
function App() {
    var name = "sun";
    var age1 = 50;
    var 회원들 = [1, "2", 3];
    var song = { name: 'remon', singer: 'yonezu' };
    var project = {
        member: ['kim', 'park'],
        days: 30,
        started: true,
    };
    var user = 'kim';
    var age = undefined;
    var married = false;
    var 철수 = [user, age, married];
    var 학교 = {
        score: [100, 97, 84],
        teacher: 'Phil',
        friend: 'John'
    };
    학교.score[4] = false;
    학교.friend = ['Lee', 학교.teacher];
    return (<div className="App">
      
    </div>);
}
exports.default = App;
