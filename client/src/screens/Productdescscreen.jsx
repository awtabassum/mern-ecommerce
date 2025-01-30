import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {getProductById} from "../actions/productActions"
import {addToCart} from "../actions/cartActions"
import Loader from "../components/Loader";
import Error from "../components/Error";
import Review from "../components/Review"

function Productdescscreen() {
  // const products = [];
  const { id } = useParams(); // Get the product ID from the URL
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // Access the product details from Redux State
  const productDetails = useSelector((state) => state.products.productsData);
  const status = useSelector((state) => state.products.status) // for loading or failure state
   
  // const product = products.find((product) => product.id == id);
  
  // function addToCart (){
  // dispatch(addToCart(product, quantity))
  // }
  
  function handleAddToCart() {
    dispatch(addToCart(productDetails, quantity));
  }
  
  useEffect(() => {
    // Dispatch the action to fetch the product details when the component mounts
    dispatch(getProductById(id))
  }, [dispatch, id])
  
// Handle loading state
/*
if (status === 'failed') {
  // return <div>Some Error while loading details of single product</div>
  <Error error='Some Error while loading details of single product'/>
}
*/
if (status === 'loading') {
  return <Loader />;
}

if (status === 'failed') {
  return <Error error="Some error occurred while loading the product details." />;
}

/*
if (status === 'idle'){
  // return <div>Loading...</div>
  <Loader />
}
*/
// console.log("Product Details:", productDetails);
//   console.log("Count In Stock:", productDetails?.countInStock);
  return (
    <>
      {/* <h1>Productdescscreen</h1>
      <h1>The product id is {id}</h1> */}
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card p-2 m-3">
             {/* Old line<h1>{product.name}</h1> */}
             <h1>{productDetails.name}</h1>
            <img
              // src={product.image}
              src={productDetails.image}
              style={{ height: "300px" }}
              className="img-fluid m-3 bigimg"
            />
            {/* <p>{product.description}</p> */}
            <p>{productDetails.description}</p>
          </div>
        </div>
        <div className="col-md-6 text-left">
          <div className="m-2">
            {/* <h1>Price : {product.price}</h1> */}
            <h1>Price : {productDetails.price}</h1>
            <hr />
            <h1>Select Quantity</h1>
            
            <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
   {productDetails && productDetails.countInStock > 0 ? ( 
    [...Array(productDetails.countInStock).keys()].map((x, i) => (
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    ))
  ) : (
     <option value="0" disabled>
       Out of Stock
     </option>
  
  )
  
   }


</select>

            <hr />
            <button className="btn btn-dark" onClick={handleAddToCart}>ADD TO CART</button>
          </div>
          <hr />
          <Review product={productDetails}/>
        </div>
      </div>
    </>
  );
}

export default Productdescscreen;
