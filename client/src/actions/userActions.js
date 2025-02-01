import axios from "axios";
import {getNewUserSuccess, getNewUserFailure} from "../store/userReducer"
import {startLoading,getLoginSuccess, getLoginFailure, logout} from "../store/userReducer"
import {getUpdatedUserSuccess, getUpdatedUserFailure} from "../store/userReducer"
export const registerNewUser = (user) => async (dispatch) => {
try {
    const response = await axios.post('/api/v1/register',user)
    dispatch(getNewUserSuccess(response.data));
    // dispatch(getNewUserSuccess(response.data.data) || [])
    console.log(response);
} catch (error) {
    console.log("Error while registering new user", error);
    dispatch(getNewUserFailure())
    console.log(error);
}
}

export const loginUser = (user) => async (dispatch) => {
    try {
       
        dispatch(startLoading()); // Set status to 'loading'
        
        const response = await axios.post('/api/v1/login',user)
        dispatch(getLoginSuccess(response.data));
        console.log(response);

        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location = '/';
    } catch (error) {
        console.log("Error while Login user", error);
        dispatch(getLoginFailure())
        console.log(error);
    }
    }
    
    export const logoutUser = (user) => async (dispatch) => {
        try {
            const response = await axios.post('/api/v1/logout')
        dispatch(logout());
            localStorage.removeItem('currentUser')
            localStorage.removeItem('cartItems')
            console.log(response.data.message); // Optional success message
            window.location = '/';
        } catch (error) {
            console.log("Error while Logout user", error);
        
        }
    }

    export const updateUser = (userId, updatedUser) => async (dispatch) => {
        try {
            // const response = await axios.post('/api/v1/update',{userId, updatedUser})
            const response = await axios.put(`/api/v1/update/${userId}`, updatedUser)
            dispatch(getNewUserSuccess(response.data));
            // dispatch(getNewUserSuccess(response.data.data) || [])
            console.log(response);
            window.location.reload()
        } catch (error) {
            console.log("Error while updating the user data", error);
            dispatch(getNewUserFailure())
            console.log(error);
        }
        }