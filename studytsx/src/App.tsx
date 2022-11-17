import React, { useState } from 'react';
import './App.css';

function App() {

  let [user, setUser] = useState<string | number>('kim')

  return (
    <div>
      <h4>안녕하세요</h4>
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}

function Profile(props :{name:string, age:number}) :JSX.Element {
  return (
    <div>{props.name}입니다</div>
  )
}

export default App;
