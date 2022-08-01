/*eslint-disable*/
import React from 'react';
import { useNavigate } from 'react-router-dom';

function List(props) {
    let navigate = useNavigate()
    return (       
        <div className="col-md-4">
            <img src={ props.shoes.img } width="80%" onClick={()=>{navigate('/detail/'+props.shoes.id)}}/>
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.price }</p>
        </div> 
    );
  }

export default List;