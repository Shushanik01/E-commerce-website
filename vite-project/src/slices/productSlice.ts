import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.error = action.payload || 'Something went wrong!';
            state.loading = false
        })
    }
})

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async(_, thunkAPI) =>{
    try{
        const response = await fetch('https://fakestoreapi.com/products');

        if(!response.ok){
            throw new Error('Unsuccesfull product fetch')
        }
        const data = await response.json();
        return data
    } catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
  }
);