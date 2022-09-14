/*eslint-disable*/
import React from 'react';
import './App.css';

function say(x? :string) {
  if (x) {
    console.log("안녕하세요 " + x );
  } else {
    console.log("이름이 없음")
  }
  
  
}

function App() {
  let name  = "sun";
  let age1 :number = 50;
  let 회원들 :(number|string)[] = [1, "2", 3] 
  let song = { name : 'remon', singer : 'yonezu'}
  let project :{
    member : string[], 
    days : number, 
    started : boolean 
  } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }
  let user :string = 'kim';
  let age :number|undefined = undefined;
  let married :boolean = false; 
  let 철수 :(string|number|boolean|undefined)[] = [user, age, married];
  let 학교 :{
    score : (number|boolean)[],
    teacher : string,
    friend : string | string[]
  } = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
  }
  학교.score[4] = false;
  학교.friend = ['Lee' , 학교.teacher]
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
