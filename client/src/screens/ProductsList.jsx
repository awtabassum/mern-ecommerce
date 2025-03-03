import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Error from '../components/Error'
import {getAllProductsAction} from "../actions/productActions"
import {deleteProduct} from "../actions/productActions"

function ProductsList() {
  const dispatch = useDispatch();
  const {productsData, status} = useSelector((state) => state.products)
  console.log("Products Data:", productsData);
console.log("Status:", status);

  useEffect(()=>{
    dispatch(getAllProductsAction())
  },[dispatch]);
  return (
    <>
    <h1>Products List</h1>
    
    <table className='table table-bordered'>
      <thead>
        <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Id</th>
        <th>Delete</th>
        </tr>
      </thead>
      
      <tbody>
  {status === "loading" && <Loader />}
  {status === "failed" && <Error error="Something went wrong while getting all the products" />}
  {status === "succeeded" && productsData.length > 0 ? (
    productsData.map((product) => (
      <tr key={product._id}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.countInStock}</td>
        <td>{product._id}</td>
        <td><i className="far fa-trash-alt" onClick={()=>{dispatch(deleteProduct(product._id))}}></i></td>
      </tr>
    ))
  ) : (
    status === "succeeded" && <p>No Product Found</p>
  )}
</tbody>

    </table>
    </>
  )
}

export default ProductsList

/*
<td>
  <i 
    className="far fa-trash-alt" 
    onClick={() => {
      dispatch(deleteProduct(product._id));

      // Immediately remove the deleted product from UI
      const updatedProducts = productsData.filter(p => p._id !== product._id);
      dispatch(getAllProductsSuccess(updatedProducts));
    }}
  ></i>
</td>

*/