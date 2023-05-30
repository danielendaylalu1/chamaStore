import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addTocart(state, action){
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(!existingItem){
                state.items.push({
                    id:action.payload.id,
                    name:action.payload.name,
                    price:action.payload.price,
                    amount:action.payload.amount,
                    totalprice:action.payload.totalprice
                })
            }else{
                existingItem.amount++
                existingItem.totalprice = existingItem.price * existingItem.amount
            } 

            state.totalQuantity++
            console.log(existingItem)
        },
        removeFromCart(state, action){
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(existingItem){
                if(existingItem.amount === 1){
                    state.items = state.items.filter(item => item.id !== existingItem.id)
                }else{
                    existingItem.amount--
                    existingItem.totalprice = existingItem.price * existingItem.amount
                }
            }
            state.totalQuantity--
            console.log(existingItem)
        },
        removeAll(state){
            state.items = []
            state.totalQuantity = 0
            // console.log()
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice