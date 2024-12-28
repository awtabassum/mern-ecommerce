import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsData : [],
    status:'idle',
    loading: false,
    error: null,
    // products: [],
  }
const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
      getAllProductsStart: (state) => {
        state.status = "loading";
      },
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


export const {getAllProductsStart, getAllProductsSuccess, getAllProductsFailure, getProductByIdSuccess, getProductByIdFailure} = productsSlice.actions;
export default productsSlice.reducer;
