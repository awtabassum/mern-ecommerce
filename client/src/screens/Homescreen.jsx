import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsAction} from "../actions/productActions"
import Product from "../components/Product";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

function Homescreen() {
  const dispatch = useDispatch();
  const { productsData, status } = useSelector((state) => state.products);
  // const products = useSelector((state) => state.products.productsData) // Access products data from Redux state
  // const [loading, setLoading] = useState('');
  // const [error, setError] = useState('');
    useEffect(() => {
    dispatch(getAllProductsAction());
      },[dispatch]);
      console.log("Status:", status, "Products Data:", productsData);
      
  return (
    <>
    <Filter />
      {/* <h1>Home Screen Page</h1> */}
      {status === "loading" && <Loader />}
      {status === "failed" && <Error error="Something went wrong!" />}
      
      {/* <p>PRODUCTS: {productsData.length}</p> */}
      <div className="row justify-content-center">
      {status === "succeeded" && productsData.length > 0 ? (
          productsData.map((product) => (
            <div key={product._id} className="col-md-3 m-5 card p-2 text-left">
              <Product product={product} />
            </div>
          ))
        ) : (
          status === "succeeded" && <p>No products found.</p>
        )}
      </div>
    </>
  );
}

export default Homescreen;


/*
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsAction} from "../actions/productActions"
import Product from "../components/Product";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Homescreen() {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.productsData) // Access products data from Redux state
  const productsState = useSelector((state) => state.products);
  const { loading, error, products } = productsState;
  
    useEffect(() => {
    dispatch(getAllProductsAction());
      },[dispatch]);
  return (
    <>
      <h1>Home Screen Page</h1>
      <p>PRODUCTS: {products.length}</p>
      <div className="row justify-content-center">
        {loading ? (<Loader/>) : error ? (<Error error="Something went wrong" />) :
        (
        products.length > 0 && products.map((product) => (
          <div  key={product._id} className="col-md-3 m-5 card p-2 text-left">
            <Product product={product} />
           </div>
        ))
        
        )}
      </div>
    </>
  );
}

export default Homescreen;
*/