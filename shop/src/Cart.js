import React from 'react';
import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeAge, plusCount, removeCart } from './store/store'

function Cart(props) {

    let state = useSelector( ( state )=>{ return state } )
    let dispatch = useDispatch()

    return (
        <div>
            {state.user.name} {state.user.age}의 장바구니
            <button onClick={()=>{dispatch(changeName())}}>버튼</button>
            <button onClick={()=>{dispatch(changeAge(100))}}>버튼</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td><button onClick={()=>{dispatch(plusCount(state.cart[i].id))}}>+</button></td>
                            <td><button onClick={()=>{dispatch(removeCart(state.cart[i]))}}>삭제</button></td>
                        </tr>
                        )
                    }
</tbody> 
            </Table> 
        </div>
    );
}

export default Cart;