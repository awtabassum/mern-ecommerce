
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsData : [],
    status:'idle',
  }
const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getAllProductsSuccess : (state, action)=>{
            state.status = 'succeeded';
            state.productsData = action.payload;
        },
        getAllProductsFailure:(state)=>{
          state.status = "failed"
        },
        getProductByIdSuccess : (state, action)=>{
          state.status = 'succeeded';
          state.productsData = action.payload;
      },
      getProductByIdFailure:(state)=>{
        state.status = "failed"
      }
    }
})


export const {getAllProductsSuccess, getAllProductsFailure, getProductByIdSuccess, getProductByIdFailure} = productsSlice.actions;
export default productsSlice.reducer;
