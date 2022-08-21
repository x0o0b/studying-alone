import { createSlice } from '@reduxjs/toolkit'

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

export let { changeName, changeAge } = user.actions

export default user