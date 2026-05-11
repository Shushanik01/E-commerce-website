import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slices/cartSlice';
import productsReducer from '../slices/productSlice'

const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productsReducer
    }
});
export default store
export type RootState = ReturnType<typeof store.getState>;