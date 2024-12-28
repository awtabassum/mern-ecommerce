import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

// Fetch cart items from localStorage or use an empty array
const cartItems = localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems')) 
  : [];
// Fetch current user
// const loggedUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null;
const currentUser = localStorage.getItem('currentUser') 
  ? JSON.parse(localStorage.getItem('currentUser')) 
  : null;

  // Define the initial state
const initialState = {
    cart: { cartItems: cartItems },
    user: { currentUser: currentUser },
    
    // user: { currentUser: loggedUser }
    // loginReducer:{currentUser : currentUser}
  };

const store = configureStore({
    reducer:{
        products : productsReducer,
        cart:cartReducer,
        user:userReducer
    },
    preloadedState: initialState, // Set the initial state here
    }
    );
   export default store;
   