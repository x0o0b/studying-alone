/*eslint-disable*/
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import List from './component/List';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './component/Detail';

function App() {
  let [shoes] = useState(data)
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail">detail</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
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
        </>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes> 
   
    </div>

  );
}

export default App;
