
const addToCart = (product, quantity) => (dispatch, getState) => {
    const cartItem = {
      name: product.name,
      _id: product._id,
      price: product.price,
      countInStock: product.countInStock,
      quantity: quantity,
    };
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems) // Updated path
    );
    
    
  };
  const deleteFromCart = (item)=>dispatch=>{
    dispatch({type:"DELETE_FROM_CART", payload:item})
    
   }
  /*
  const deleteFromCart = (item)=>(dispatch, getState)=>{
   dispatch({type:"DELETE_FROM_CART", payload:item})
   localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems) // Updated path
  );
  }
  */
  export { addToCart, deleteFromCart };
  


//  const addToCart=(product, quantity)=>(dispatch, getState)=>{
// const cartItem = {
//     name:product.name,
//     _id:product._id,
//     price:product.price,
//     countInStock:product.countInStock,
//     quantity:quantity
// }
// dispatch({type:'ADD_TO_CART', payload:cartItem})
// localStorage.setItem('cartItems',JSON.stringify(getState().addToCartReducer.cartItems))
// }

// export {addToCart}