/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { addcart } from '../store/store'

let YellowBtn = styled.button`
  background : ${ props => props.bg};
  color : black;
  pading : 10px;
`

function Detail(props) {

  let [alert, setAlert] = useState(false);
  let [count, setCount] = useState(0);
  let {id} = useParams();
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('')
  let findItem = props.shoes.find((x)=> x.id ==id );
  let dispatch = useDispatch()

  useEffect(()=>{ setTimeout(()=>{ setFade2('end') }, 10);  return ()=>{setFade2('')} }, [])

  useEffect(()=>{
    let a = setTimeout(()=>{{setAlert(true)}}, 2000);
    return ()=>{
      clearTimeout(a)
    }
  }, []);

  useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(findItem.id)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))

    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, []);

    return (
        <div className={"container start " + fade2}>
          {
            alert == false ? 
              <div className='alert alert-warning' style={{margin:'10px'}}>
                2초이내 구매시 할인
              </div> 
            : null
          }
          {count}
          <button onClick={()=>{setCount(count + 1);}}>버튼</button>
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{props.shoes[id].title}</h4>
              <p>{findItem.content}</p>
              <p>{findItem.price}</p>
              <button className="btn btn-danger" onClick={()=>{dispatch(addcart({id : 1, name : props.shoes[id].title, count : 1}))}}>주문하기</button> 
            </div>
          </div>

          <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent tab={tab}/>
        </div> 
    );
}

function TabContent({tab}) {
  let [fade, setFade] = useState('')
  useEffect(()=>{ setTimeout(()=>{ setFade('end') }, 10);  return ()=>{ setFade('') } }, [tab])
  return <div className={`start ${fade}`}>{[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}</div>

  // if (tab == 0) {
  //   return <div>내용1</div>
  // } else if (tab == 1) {
  //   return <div>내용2</div>
  // } else if (tab == 2) {
  //   return <div>내용3</div>
  // }
}


export default Detail;