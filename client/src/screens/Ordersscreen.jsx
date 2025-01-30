import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getOrdersByUserId} from "../actions/orderActions"
import Loader from "../components/Loader"
import Error from "../components/Error"
import { Link } from 'react-router-dom'

function Ordersscreen() {
  const orderState = useSelector(state=>state.order)
  const {orders, error, loading} = orderState
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    const currentUser = storedUser ? JSON.parse(storedUser): null;
   if (localStorage.getItem("currentUser")) {
    dispatch(getOrdersByUserId({userId : currentUser._id}))
   }
   else{
    window.location.href = "/login"
   }
  }, [dispatch])
  
  return (
    <>
    
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <h2>MY ORDERS</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {loading && (<Loader />)}
            {orders && (orders.map(order=>{
              return 
                // <Link to={`/orderinfo/:${order._id}`}>
                  <tr onClick={()=>{window.location=`/orderinfo/${order._id}`}}>
                <td>{order._id}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt}</td>
                <td>{order.transactionId}</td>
                <td>{order.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</td>
                </tr>
                // </Link>
              
            }))}
            {error && (<Error error={"Something went wrong while getting orders by User Id"}/>)}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Ordersscreen