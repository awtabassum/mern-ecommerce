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
            //    getLogoutSuccess : (state,action)=>{
            //     state.status = 'succeeded';
            //     state.userData = action.payload;
            //     },
            //     getLogoutFailure : (state)=>{
            //         state.status = "failed"
            //        }
    }
})

export const {getNewUserSuccess, getNewUserFailure, getLoginSuccess,getLoginFailure,logout} = userSlice.actions

export default userSlice.reducer