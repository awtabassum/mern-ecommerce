import { useElements } from '@stripe/react-stripe-js'
import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getOrdersByUserId} from '../actions/orderActions'
import Error from "../components/Error"
import Loader from "../components/Loader"

function Orderinfoscreen({match}) {
    const dispatch = useDispatch()
    const orderState = useSelector(state =>state.getOrdersByUserId)
    const {order, loading, error}  = orderState
    useEffect(() => {
      dispatch(getOrdersByUserId(match.params.orderid))
    }, [])
    
  return (
    <>
    {error && (<Error error="Something went wrong"/>)}
    {order && (<div>
      <div className="row justify-content-center">
        <div className="col-md-5 card">
         <h2>Items in Your Order</h2>
         <hr />
         {order.orderItems.map(item=>{
          return <div className='orderItem'>
            <h1>{item.name}</h1>
            <h1>Quantity : <b>{item.quantiy}</b></h1>
            <h1>Price: {item.quantiy} * {item.price} = {item.quantiy * item.price}</h1>
          </div>
         })}
        </div>
        <div className="col-md-5 text-right">
         <h2>Order Details</h2>
         <hr />
         <h3>Order Id : {order._id}</h3>
         <h3>Total Amount : {order.orderAmount}</h3>
         <h3>Date of Order : {order.createdAt.substring(0,10)}</h3>
         <h3>Transaction Id: {order.transactionId}</h3>
         {order.isDelivered ? (<h3>Order Delivered</h3>) : (<h3>Order Placed</h3>)}
         <hr />
         <div className='text-right'>
          <h2>Shipping Details</h2>
          <h1 className='text-right'>Address : <b>{order.shippingAddress.address}</b></h1>
          <h1 className='text-right'>City : <b>{order.shippingAddress.city}</b></h1>
          <h1 className='text-right'>Country : <b>{order.shippingAddress.country}</b></h1>

         </div>
        </div>
      </div>
    </div>)}
    <div className="row justify-content-center">
      <div className="col-md-10">
        <h2 className='text-left'>Replacement Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus enim, in harum ad eos dolorum porro vero eligendi quod possimus libero similique pariatur nihil quos quaerat exercitationem illum itaque.</p>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Orderinfoscreen