import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Rating from 'react-rating'
import {addProductReview} from "../actions/productActions"

function Review({product}) {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState();
    const dispatch = useDispatch()

    function sendReview () {
      if (localStorage.getItem('currentUser')) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        let alreadyReviewed;
        for(let i=0;i<product.reviews.length;i++){
          if (product.reviews[i].userId === currentUser._id) {
            alreadyReviewed = true;
          }
        }
        if (alreadyReviewed) {
          alert("You have already reviewed this product")
        }  
        else {
          const review = {rating,comment}
       dispatch(addProductReview(review,product._id))
        }
      }
      else{
        window.location.href="/login"
      }
      
    }
  return (
    <>
    <h2 className='mt-3'>Give Your Review</h2>
    <Rating
              style={{color:'orange'}}
      emptySymbol="far fa-star fa-1x"  
      fullSymbol="fas fa-star fa-1x" 
      initialRating={rating}
     onChange={(e)=>{setRating(e)}}
    />
    <input type="text" className='form-control mt-2 mr-5' value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
    <button className='btn mt-3' onClick={sendReview}>Submit Review</button>
    <h2>Latest Reviews</h2>
   {product.reviews && ( product.reviews.map(review=>{
      return <div>
        <Rating
              style={{color:'orange'}}
      emptySymbol="far fa-star fa-1x"  
      fullSymbol="fas fa-star fa-1x" 
      initialRating={review.rating}
     onChange={(e)=>{setRating(e)}}
     readonly
    />
    <p>{review.comment}</p>
    <p>{review.name}</p>
    <hr />
      </div>
    }))}
    </>
  )
}

export default Review