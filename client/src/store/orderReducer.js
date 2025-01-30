import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    placeOrder: null, // Ensure this matches the initial state in `store.js`
    // status: null,
    userData: null,
    status:'idle',
    loading: false,
    error: null,
};

const orderSlice = createSlice({
    name: "order",
    initialState, // Explicitly use initialState here
    reducers: {
        startLoading:(state)=>{
            state.status = 'loading'
        },
        getOrderSuccess: (state, action) => {
            state.status = "succeeded";
            state.userData = action.payload;
        },
        getOrderFailure: (state) => {
            state.status = "failed";
        },
        getOrdersByUserIdSuccess: (state,action) => {
            state.status = "succeeded";
            state.userData = action.payload;
        },
        getOrdersByUserIdFailure:(state)=>{
            state.status = "failed"
        }
    },
});

export const {startLoading, getOrderSuccess, getOrderFailure, getOrdersByUserIdSuccess, getOrdersByUserIdFailure } = orderSlice.actions;
export default orderSlice.reducer;
