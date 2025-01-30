/*
import axios from "axios";
import {getOrderSuccess, getOrderFailure} from "../store/orderReducer.js"
// import {getLoginSuccess, getLoginFailure} from "../store/userReducer.js"
// import addToCartReducer from "../store/orderReducer.js"

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
    try {
        const currentUser = getState().user.currentUser
        const cartItems = getState().cart.cartItems
        
        const cartItem = new Array()
        for (let i = 0; i<cartItems.length; i++) {
            let item = {
                name:cartItems[i].name,
                quantity:cartItems[i].quantity,
                _id:cartItems[i]._id,
                price:cartItems[i].price
            }
            cartItem.push(item)
        }

        const response = await axios.post('/api/orders/placeorder',{token, subTotal,currentUser,cartItems})
        dispatch(getOrderSuccess(response.data))
        console.log(response);
        localStorage.setItem('placeOrder', JSON.stringify(response.data)
                
    )
    } catch (error) {
        console.error("Error while placing order:", error);
        dispatch(getOrderFailure())
    }
}

*/
import axios from "axios";
import {startLoading, getOrderSuccess, getOrderFailure, getOrdersByUserIdSuccess, getOrdersByUserIdFailure} from "../store/orderReducer.js"
export const placeOrder = (paymentMethodId, amount) => async (dispatch, getState) => {
    try {
      
      const currentUser = getState().user.currentUser;
      const cartItems = getState().cart.cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        _id: item._id,
        price: item.price,
        
      }));
      cartItems.push(item)
      dispatch(startLoading())
      // const response = await axios.post("/api/orders/placeorder", {
        const response = await axios.post("/api/v1/placeorder", {
        paymentMethodId,
        amount,
        currentUser,
        cartItems,
      });
  
      dispatch(getOrderSuccess(response.data));
      localStorage.setItem("placeOrder", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error while placing order:", error);
      dispatch(getOrderFailure());

      console.error("Error while placing order:", error.response?.data || error.message);
      alert(`Error: ${error.response?.data.message || error.message}`);
    }
  };
  
  export const getOrdersByUserId = (userId) => async(dispatch)=>{
    try {
      const response = await axios.post('/api/v1/getordersbyuserid', userId)
      dispatch(getOrdersByUserIdSuccess(response.data))
      console.log(response.data);
      
    } catch (error) {
      console.log("Error while getting Orders by User Id", error);
      dispatch(getOrdersByUserIdFailure())
    }
  }