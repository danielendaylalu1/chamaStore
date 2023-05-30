import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addTocart(state, action){
            const newItem = {
                id:action.payload.id,
                name:action.payload.name,
                price:action.payload.price,
                amount:action.payload.amount
            }
            state.items.push(newItem)
            state.totalQuantity++
            console.log(newItem)
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice