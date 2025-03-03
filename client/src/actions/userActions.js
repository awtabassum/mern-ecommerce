import axios from "axios";
import {getNewUserSuccess, getNewUserFailure} from "../store/userReducer"
import {startLoading,getLoginSuccess, getLoginFailure, logout} from "../store/userReducer"
import {getUpdatedUserSuccess, getUpdatedUserFailure} from "../store/userReducer"
import {getAllUsersSuccess, getAllUsersFailure} from "../store/userReducer"
import {getdeleteUserSuccess, getdeleteUserFailure} from "../store/userReducer"
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
/*
    export const updateUser = (userId, updatedUser) => async (dispatch) => {
        try {
            // const response = await axios.post('/api/v1/update',{userId, updatedUser})
            //   const response = await axios.put(`/api/v1/update/${userId}`, updatedUser)
            const response = await axios.put('/api/v1/update',{userId, updatedUser})
            dispatch(getUpdatedUserSuccess(response.data));
            // dispatch(getNewUserSuccess(response.data.data) || [])
            console.log(response);
            window.location.reload()
        } catch (error) {
            console.log("Error while updating the user data", error);
            dispatch(getUpdatedUserFailure())
            console.log(error);
        }
        }
  */     
  /*
        export const updateUser = (userId, updatedUser) => async (dispatch) => {
            try {
                const response = await axios.post('/api/v1/update', { userId, updatedUser });
                
                dispatch(getUpdatedUserSuccess(response.data.user)); // Use `user` from response
                console.log(response);
        
                // No need to reload the page, let Redux update the state
            } catch (error) {
                console.log("Error while updating the user data", error);
                dispatch(getUpdatedUserFailure());
            }
        };
*/        

export const updateUser = (userId, updatedUser) => async (dispatch) => {
    try {
        const response = await axios.put(`/api/v1/update`, { userId, updatedUser });

        dispatch(getUpdatedUserSuccess(response.data.user)); // Update Redux state
        localStorage.setItem('currentUser', JSON.stringify(response.data.user)); // Update localStorage

        console.log("Updated user data:", response.data.user);

        // No need to reload the page manually
    } catch (error) {
        console.log("Error while updating the user data", error);
        dispatch(getUpdatedUserFailure());
    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
    //   dispatch(startLoading());
      const response = await axios.get('/api/v1/getallusers');
    //   dispatch(getAllUsersSuccess(response.data)); 
    dispatch(getAllUsersSuccess(response.data.data || []));
    } catch (error) {
      console.log("Error fetching users", error);
    //   dispatch(getAllUsersFailure(error.message));
    dispatch(getAllUsersFailure());
    }
  };
  export const deleteUser = (userId) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const response = await axios.post('/api/v1/deleteuser', { userId });
        dispatch(getdeleteUserSuccess({ userId })); // Send only `userId`
    } catch (error) {
        console.log("Error deleting user:", error);
        dispatch(getdeleteUserFailure());
    }
};
 
/*
  export const deleteUser = (userId) => async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.post('/api/v1/deleteuser', {userId});
      dispatch(getdeleteUserSuccess(response.data)); 
    // dispatch(getAllUsersSuccess(response.data.data || []));
    } catch (error) {
    //   dispatch(getAllUsersFailure(error.message));
    dispatch(getdeleteUserFailure());
    }
  };
  */

/*
export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch(startLoading())
        // const response = await axios.get("/getallusers");
        const response = await axios.get("/api/v1/getallusers");

        // dispatch(getAllUsersSuccess(response.data.data || []))
        console.log("API Response:", response.data); // Debugging Log
        dispatch(getAllUsersSuccess(response.data || []))
    } catch (error) {
        console.log("Error while gett all users", error);
        dispatch(getAllUsersFailure(error.response?.data?.message || 'Failed to fetch users actions'))
    }
}
*/

