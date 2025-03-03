import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer"
// import { updateUser } from "../actions/userActions";
// Fetch cart items from localStorage or use an empty array
const cartItems = localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems')) 
  : [];
// Fetch current user

// const loggedUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null;
const currentUser = localStorage.getItem('currentUser') 
  ? JSON.parse(localStorage.getItem('currentUser')) 
  : null;

  const placeOrder = localStorage.getItem('placeOrder') 
  ? JSON.parse(localStorage.getItem('placeOrder')) 
  : null;

  // Define the initial state
const initialState = {
    // cart: { cartItems: cartItems },
    // user: { currentUser: currentUser },
    // order: {placeOrder : placeOrder}

    cart: { cartItems },
    user: { currentUser },
    order: {
      placeOrder,
      status: "idle",
      error: null,
      userData: null,
      loading: false,
  },
  };

const store = configureStore({
    reducer:{
        products : productsReducer,
        cart:cartReducer,
        users:userReducer,
        order:orderReducer
    },
    preloadedState: initialState, // Set the initial state here
    }
    );
   export default store;
   