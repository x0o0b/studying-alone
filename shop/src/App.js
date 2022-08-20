/*eslint-disable*/
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import List from './component/List';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

import Detail from './component/Detail';
import Event from './component/Event';
import About from './component/About';
import None from './component/none';
import Loding from './component/Loding';

function App() {
  let [shoes, setShoes] = useState(data)
  let [count, setCount] = useState(0)
  let [loding, setLoding] = useState(false)
  let navigate = useNavigate()
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={ ()=>{ navigate('/') } }>Home</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/detail/1') } }>detail</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate('/about') } }>About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path='/' element={<>
          <div className='main-bg'></div>
          <div className="container">
          <div className="row">
          {shoes.map(function (a, i){
            return(
              <List shoes={shoes[i]}/>  
            );
            })}
        </div>
      </div>
      <None count={count}/>
      {loding ? <Loding/> : null}
      <button id='선버튼'
        onClick={()=>{
          setLoding(true);
          setCount(count + 1);
          if(count == 0){
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((data)=>{  
              setLoding(false);       
              let copy = [...shoes, ...data.data]
              setShoes(copy);
            }).catch(()=>{setLoding(false);})
          } else if(count == 1) {
            axios.get('https://codingapple1.github.io/shop/data3.json')
            .then((data)=>{
              setLoding(false);         
              let copy = [...shoes, ...data.data]
              setShoes(copy)
            }).catch(()=>{setLoding(false);})
          } if (count == 2) {
            선버튼.style.display = "none";
            setLoding(false);
          }
      }}
      >더보기</button>
      </>}/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>}/>
          <Route path='location' element={<div>위치정보임</div>}/>
        </Route>

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>

        <Route path='*' element={<div>없는페이지에요</div>}/>
      </Routes> 
   
    </div>
  );
}


export default App;
