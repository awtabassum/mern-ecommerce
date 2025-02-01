import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    // userData : [],
    userData : null, // Change from empty array to null for consistency with logout
    status:'idle',
}
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        startLoading: (state) => {
            state.status = 'loading';
        },

        getNewUserSuccess : (state,action)=>{
        state.status = 'succeeded';
        state.userData = action.payload;
        },
        getNewUserFailure : (state)=>{
         state.status = "failed"
        },
        getLoginSuccess : (state,action)=>{
            state.status = 'succeeded';
            state.userData = action.payload;
            },
            getLoginFailure : (state)=>{
                state.status = "failed"
               },
               logout: (state) => {
                state.userData = null; // Clear userData
                state.status = 'idle'; // Reset status
            },
            getUpdatedUserSuccess : (state,action)=>{
                state.status = 'succeeded';
                state.userData = action.payload;
                },
                getUpdatedUserFailure : (state)=>{
                 state.status = "failed"
                },
            //    getLogoutSuccess : (state,action)=>{
            //     state.status = 'succeeded';
            //     state.userData = action.payload;
            //     },
            //     getLogoutFailure : (state)=>{
            //         state.status = "failed"
            //        }
    }
})

export const {startLoading,getNewUserSuccess, getNewUserFailure, getLoginSuccess,getLoginFailure,logout, getUpdatedUserSuccess, getUpdatedUserFailure} = userSlice.actions

export default userSlice.reducer