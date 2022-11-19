import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import {RootState, increment} from './index'

function App() {
  const 꺼내온거 = useSelector( (state :RootState) => state );
  const dispatch :Dispatch = useDispatch();

  return (
    <div className="App">
      { 꺼내온거.counter1.count}
      <button onClick={()=>{dispatch(increment())}}>버튼</button>
    </div>
  );
} 

export default App;
