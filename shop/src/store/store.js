import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name : 'cart' ,
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ], 
    reducers : {
        plusCount(state, actions){
            let finditem = state.findIndex((a)=>{ return a.id === actions.payload })
            state[finditem].count++
        },

        addcart(state, actions){
            state.push(actions.payload);
        },

        removeCart(state, actions){
            state.onRemove(actions.payload);
        }
    }
})

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },
    reducers : {
        changeName(state){
            // return { name : 'pack', age : 20 }
            state.name = 'park'
        },
        changeAge(state, actions){
            state.age += actions.payload
        }
    }
})

export let { plusCount, addcart, removeCart } = cart.actions
export let { changeName, changeAge } = user.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
   }
})