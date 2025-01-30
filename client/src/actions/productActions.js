
import axios from "axios";
import {getAllProductsStart, getAllProductsSuccess, getAllProductsFailure, getProductByIdSuccess,getProductByIdFailure, getProductReviewSuccess, getProductReviewFailure} from "../store/productsReducer";
import {loginUser} from "../actions/userActions"

export const getAllProductsAction = () => async (dispatch) => {
  

  try {
    // await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

    dispatch(getAllProductsStart());
    const response = await axios.get('/api/v1/getallproducts');
    dispatch(getAllProductsSuccess(response.data.data || []))
  } catch (error) {
    console.log("Error while getting all products", error);
    dispatch(getAllProductsFailure());
  }
  

}

export const getProductById = (productid) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/getproductbyid',{productid});
        
    dispatch(getProductByIdSuccess(response.data))
    // dispatch(getProductByIdSuccess(response.data.data || []))
  } catch (error) {
    console.log("Error while getting product by id", error);
    dispatch(getProductByIdFailure());
  }
 
}

export const filterProducts = (searchKey, sort, category) => async (dispatch) => {
 
  try {
    const response = await axios.get('/api/v1/getallproducts');
    let filteredProducts = response.data.data || [];
    // dispatch(getAllProductsSuccess(response.data.data || []))
    if (searchKey) {
      // filterProducts = response.data.filter(product => {return product.name.toLowerCase().includes(searchKey)})
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchKey.toLowerCase())
      );
    }
    /*
    // if (searchKey !== 'popular') {
      // if (searchKey === 'htl') {
        if (sort === 'htl') {
        filterProducts = response.data.sort((a,b)=>{
          return b.price - a.price ;
        })
     }
     else if {
      filterProducts = response.data.sort((a,b)=>{
        return a.price - b.price;
      })
     }
    // }
    if(category !== 'all'){
     filterProducts = response.data.filter(product => {return product.category.toLowerCase().includes(category)})
    }
    dispatch(getAllProductsSuccess(response.data.data || []))
    */

    // Apply search key filter
    if (searchKey) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchKey.toLowerCase())
      );
    }
    if (sort === 'htl') {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'lth') {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }

    // Apply category filter
    if (category !== 'all') {
      filteredProducts = filteredProducts.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Dispatch the filtered products
    dispatch(getAllProductsSuccess(filteredProducts));
  } catch (error) {
    console.log("Error while getting filtered products", error);
    dispatch(getAllProductsFailure());
  }
}

export const addProductReview = (review, productId)=> async (dispatch, getState)=>{
  try {
    
    // const currentUser = getState().loginUser.currentUser
    const currentUser = getState().user.currentUser;
    console.log({ currentUser });
    const response = await axios.post('/api/v1/addreview', {review, productId, currentUser})
      console.log(response);
      // dispatch(getProductReviewSuccess(response.data));
      dispatch(getProductReviewSuccess())
      window.location.reload()
    
  } catch (error) {
    // console.log("Error while getting product review", error);
    console.log("Error while adding product review:", error.response?.data || error.message);
    dispatch(getProductReviewFailure());
  }
}

/*
import axios from "axios";
// export const getAllProducts = () => dispatch => {
    dispatch({type:'GET_PRODUCTS_REQUEST'})
    axios.get('/api/v1/getallproducts')
    .then((response) => {
      // setProducts(response.data.data || []);
      dispatch({type:'GET_PRODUCTS_SUCCESS', payload:response.data})
    })
    .catch((error) => {
      console.log("Error fetching products:", error);
      dispatch({type:'GET_PRODUCTS_FAILED', payload:error})
    });
}
*/

/*
axios.get('/api/v1/getallproducts')
  .then((response) => {
    console.log('Full API Response:', response);
    console.log('WAPI Response Data:', response.data);
    
    // Adjusted to set products to the inner data array
    setProducts(response.data.data || []);
  })
  .catch((error) => {
    console.log("Error fetching products:", error);
  });   
*/