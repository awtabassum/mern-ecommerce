import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addToCart, deleteFromCart } from "../actions/cartActions.js"
import Checkout from '../components/Checkout.jsx';
// import addToCartReducer from "../store/cartReducer"

function Cartscreen() {
    // const cartreducerstate = useSelector(state =>state.addToCartReducer)
    const cartreducerstate = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const {cartItems} = cartreducerstate
  
    // let subTotal = cartItems.reduce((acc,reduce)=>acc+(cartItems.price*cartItems.quantity),0)
    let subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        
    
    // const handleQuantityChange = (itemId, newQuantity) => {
    //     dispatch(updateCartItemQuantity(itemId, newQuantity)); // Update the cart in Redux
    // };
  return (
  
    <div>
     <div className="row mt-3 justify-content-center">
        <div className="col-md-8 card">
            <h1 className="text-center m-5">My Cart</h1>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    
                {cartItems.map(item=>{
                     return <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><select defaultValue={item.quantity} onChange={(e)=>{dispatch(addToCart(item,e.target.value))}}>
                            {[...Array(item.countInStock).keys()].map(i=>(
                                 <option key={i} value={i+1}>{i+1}</option>
                ))}
                            </select></td>
                        <td>{item.quantity * item.price}</td>

                     <td><i className="far fa-trash-alt" onClick={() => dispatch(deleteFromCart(item))}></i></td>   
                    </tr>
                 })}
                  
                </tbody>
            </table>
            <hr />
            <h2 className='text-center'>SubTotal: {subTotal} RS/-</h2>
            <hr />
            
            {/* <div className='text-center p-3'>
            <button className='btn'>PAY NOW</button>
            </div> */}
            <Checkout amount={subTotal}/>
            
        </div>
    </div>    
    </div>
   
  )
}

export default Cartscreen