import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers :{
        addToCart: (state, action)=>{
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );
            if(existingItem){
                existingItem.quantity +=1                   
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                })
            }

        },
        removeFromCart: (state, action)=> {
            state.items.filter(
                item => item.id !== action.payload.id
            )
        },
        increase: (state, action) =>{
        const item = state.items.find(
                item => item.id === action.payload.id

            );
           if (item) item.quantity +=1
        },
        decrease: (state, action) =>{
            const item = state.items.find(
                item => item.id === action.payload.id
            );
            if(item && item.quantity > 1){ 
                item.quantity -= 1
            } else {
                state.items.filter(
                    item => item.id !== action.payload.id
                )
            }
        }
    }
})
export const {addToCart, removeFromCart, increase, decrease} = cartSlice.actions;
export default cartSlice.reducer