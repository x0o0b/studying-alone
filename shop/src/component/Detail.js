/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

let YellowBtn = styled.button`
  background : ${ props => props.bg};
  color : black;
  pading : 10px;
`

function Detail(props) {

  useEffect(()=>{
    console.log('안녕')
  });

  
  let [alert, setAlert] = useState(false);
  let [count, setCount] = useState(0);
  let {id} = useParams();
  let findItem = props.shoes.find((x)=> x.id ==id );
  setTimeout(()=>{{setAlert(true)}}, 2000)
  

    return (
        <div className="container">
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
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
    );
}


export default Detail;