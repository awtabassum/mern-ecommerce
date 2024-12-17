/*
import React, {useEffect,useState} from "react";
import axios from "axios";
import Product from "../components/Product";

function Homescreen() {
  const [products,setProducts]=useState([])
  useEffect(() => {
   axios.get('/api/v1/getallproducts').then(res=>{
    console.log(res);
    setProducts(res.data)
  }).catch(err=>{
    console.log(err);
    
  })
// }, [products]) 
}, [products])
  
  return (
    <>
      <h1>Home Screen Page</h1>
      <div className="row justify-content-center" >
       {products.length > 0 && (products.map(product=>(
        
        
        <div key={product._id}>
        <Product product = {product}/>
        </div>
        
       )))}
      </div>
    </>
  );
}

export default Homescreen;
*/
/*
import React from "react";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";

function Homescreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/getallproducts')
      .then((response) => {
        // console.log("WRESPONSE",response);
            
        console.log('API Response:', response.data);
        setProducts(response.data.products || []);

        // setProducts(response.data.products);
        // setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);  // Removed products from the dependency array

  return (
    <>
      <h1>Home Screen Page</h1>
      <div className="row justify-content-center">
      {console.log('Products state:', products)}
      <p>PRODUCTS: {products.length}</p>
      {products.length > 0 && products.map((product, index) => (
  <div key={product._id}>
    <Product product={product} />
  </div>
))}
  </div>
    </>
  );
}

export default Homescreen;
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

function Homescreen() {
  const [products, setProducts] = useState([]);
/*
  useEffect(() => {
    axios.get('/api/v1/getallproducts')
      .then((response) => {
        console.log('Full API Response:', response);
        setProducts(response.data.products || []);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, []);
*/

useEffect(() => {
  axios.get('/api/v1/getallproducts')
    .then((response) => {
      console.log('Full API Response:', response);
console.log('WAPI Response Data:', response.data);
setProducts(response.data || []);

      // setProducts(response.data.products || []); // Assuming `response.data.products` contains the array
    })
    .catch((error) => {
      console.log("Error fetching products:", error);
    });
}, []);

console.log('Products state:', products);
return (
  <>
    <h1>Home Screen Page</h1>
    <div className="row justify-content-center">
      <p>PRODUCTS: {products.length}</p>
      {products.length > 0 && products.map((product) => (
        <div key={product._id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  </>
);

/*
  return (
    <>
      <h1>Home Screen Page</h1>
      <div className="row justify-content-center">
        <p>PRODUCTS: {products ? products.length : 0}</p>
        {products && products.length > 0 && products.map((product) => (
          <div key={product._id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
  */
}

export default Homescreen;
