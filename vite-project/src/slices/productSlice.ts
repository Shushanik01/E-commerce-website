import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//     name: 'productSlice'
// })

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async(_, thunkAPI) =>{
    try{
        const response = await fetch('https://fakestoreapi.com/products');

        if(!response.ok){
            throw new Error('Unsuccesfull product fetch')
        }
    }
  }
);