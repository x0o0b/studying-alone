/*eslint-disable*/
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

let YellowBtn = styled.button`
  background : ${ props => props.bg};
  color : black;
  pading : 10px;
`

function Detail(props) {
  let {id} = useParams();
  let findItem = props.shoes.find((x)=> x.id ==id );

    return (
        <div className="container">
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