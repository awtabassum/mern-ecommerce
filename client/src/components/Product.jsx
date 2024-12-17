import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

function Product({ product }) {
  return (
    
    
       <div className="text-left">
          <div > 
        
        <Link to={`product/${product._id}`}>
          <img src={product.image} className="img-fluid" />
          <h1>{product.name}</h1>
          <Rating
          style={{color:'orange'}}
  emptySymbol="far fa-star fa-1x"  // empty star
  fullSymbol="fas fa-star fa-1x"   // filled star
  initialRating={product.rating}
  readonly  // You may want to add this if the rating should not be changeable
/>


          <h1>Price:{product.price}</h1>
        </Link>
      </div>
     </div>
 
  );
}

export default Product;
