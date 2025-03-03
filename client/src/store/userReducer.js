import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    // userData : [],
    // userData : null, // Change from empty array to null for consistency with logout
    usersData : [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null, // Fetch from localStorage
    status:'idle',
    loading:false,
    error:null,
}
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        startLoading: (state) => {
            state.status = 'loading';
            state.loading=true;
            state.error = false;
        },

        getNewUserSuccess : (state,action)=>{
        state.status = 'succeeded';
        state.usersData = action.payload;
        },
        getNewUserFailure : (state)=>{
         state.status = "failed"
        },
        getLoginSuccess : (state,action)=>{
            state.status = 'succeeded';
            state.usersData = action.payload;
            },
            getLoginFailure : (state)=>{
                state.status = "failed"
               },
               logout: (state) => {
                state.usersData = null; // Clear userData
                state.status = 'idle'; // Reset status
            },
            getUpdatedUserSuccess : (state,action)=>{
                state.status = 'succeeded';
                state.usersData = action.payload;
                },
                getUpdatedUserFailure : (state)=>{
                 state.status = "failed"
                },
                // getUsersRequest: (state) => {
                //     state.status = "loading";
                //   },
                getAllUsersSuccess : (state,action) =>{
                    state.status = "succeeded";
                    state.loading = false;
                    // state.usersData = action.payload || [];
                    state.usersData = action.payload;
                },
                getAllUsersFailure : (state) => {
                    state.status = "failed";
                    state.loading = false;
                    state.error = action.payload || 'failed to fetch users';
                },
                // getdeleteUserSuccess : (state,action)=>{
                //     state.status = "succeeded"
                //     state.loading = false;
                //     state.usersData = action.payload;
                // },
                getdeleteUserSuccess: (state, action) => {
                    state.status = "succeeded";
                    state.loading = false;
                    state.usersData = state.usersData.filter(user => user._id !== action.payload.userId);
                },
                
                getdeleteUserFailure : (action) => {
                    state.status = "failed";
                    state.loading = false;

                }
            //    getLogoutSuccess : (state,action)=>{
            //     state.status = 'succeeded';
            //     state.userData = action.payload;
            //     },
            //     getLogoutFailure : (state)=>{
            //         state.status = "failed"
            //        }
    }
})

export const {startLoading,getNewUserSuccess, getNewUserFailure, getLoginSuccess,getLoginFailure,logout, getUpdatedUserSuccess, getUpdatedUserFailure, getAllUsersSuccess, getAllUsersFailure, getdeleteUserSuccess, getdeleteUserFailure} = userSlice.actions

export default userSlice.reducer