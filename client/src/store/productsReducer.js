import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsData : [],
    status:'idle',
    loading: false,
    error: null,
    reviews:[]
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
      },
      // getProductReviewSuccess : (state, action) =>{
      //   state.status = "succeeded",
      //   state.productsData = action.payload
      // },
      // getProductReviewSuccess: (state, action) => {
      //   state.status = "succeeded";
      //   const updatedReviews = action.payload.reviews;
      //   state.productsData.reviews = updatedReviews; // Ensure `reviews` are updated
      // },
      getProductReviewSuccess: (state, action) => {
        state.status = "succeeded";
        if (state.productsData && state.productsData.reviews) {
            state.productsData.reviews.push(action.payload);
        }
    },
    
      getProductReviewFailure : (state, action) => {
        state.status = "failed";
        state.error = action.payload || 'Failed to fetch reviews';
      },
      
      getdeleteProductSuccess : (state, action) => {
       state.status = "succeeded";
       state.loading = false;
       state.productsData = state.productsData.filter(product => product._id !== action.payload.productId)
      },

      getdeleteProductFailure : (state)=>{
        state.status = "failure"
        state.loading = false
      },
      getAddProductSuccess : (state, action) => {
      state.status = "succeeded"
      state.loading = "false"
      },
      getAddProductFailure : (state) => {

      }
    }
})


export const {getAllProductsStart, getAllProductsSuccess, getAllProductsFailure, getProductByIdSuccess, getProductByIdFailure, getProductReviewSuccess, getProductReviewFailure,getdeleteProductSuccess, getdeleteProductFailure, getAddProductSuccess, getAddProductFailure} = productsSlice.actions;
export default productsSlice.reducer;
