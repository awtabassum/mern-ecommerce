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
}, [products]) 
// }, [products])
  
  return (
    <>
      <h1>Home Screen Page</h1>
      <div className="row justify-content-center" >
       {products.length > 0 && (products.map(product=>{
        return 
        
        <div key={product._id}>
        <Product product = {product}/>
        </div>
        
       }))}
      </div>
    </>
  );
}

export default Homescreen;
