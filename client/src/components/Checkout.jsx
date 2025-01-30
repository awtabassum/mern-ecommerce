import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import StripeCheckout from 'react-stripe-checkout'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe('pk_test_51QchcRGGeAneMG7e8JZQQVG8EqbOGSJUnQ6o7GuZfIjokpp4agAQxQAQsxQirXcogZdfDk1S3ruqiIqGv73Hz1Br00cVvZCksm')


import {placeOrder} from '../actions/orderActions'
import Loader from './Loader';
import Error from './Error'
function Checkout({amount}) {
  
  const dispatch = useDispatch();

    function tokenHandler (token){
    console.log(token);
    // dispatch(placeOrder(token, amount))  // Dispatch the action with token and amount
    dispatch(placeOrder(token.id, amount)) 
    }
    
    const { status, error } = useSelector((state) => state.order);
  //  const {status,error} = useSelector((state)=>state.placeOrder)
  return (
    <>
    {/* <div>
        <StripeCheckout
        token={tokenHandler}
        amount={amount * 1}
        shippingAddress
        stripeKey='pk_test_51QchcRGGeAneMG7e8JZQQVG8EqbOGSJUnQ6o7GuZfIjokpp4agAQxQAQsxQirXcogZdfDk1S3ruqiIqGv73Hz1Br00cVvZCksm'
        currency='PKR'
        >
        <button>PAY NOW</button>
        </StripeCheckout>
    </div> */}
    {status === "loading" && <Loader/>}
    {status === "failed" && <Error error={error||"Something went wrong while loading Checkout page!"} />}
   <Elements stripe={stripePromise}>
     <PaymentForm amount={amount} />
    
   </Elements>

{/* <div>
      <h1>Checkout</h1>
      <PaymentForm amount={amount} />
    </div> */}
   
    </>
  )
}

export default Checkout
