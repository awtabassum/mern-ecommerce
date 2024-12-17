import axios from "axios";
import {getAllProductsSuccess, getAllProductsFailure, getProductByIdSuccess,getProductByIdFailure} from "../store/productsReducer";

export const getAllProductsAction = () => async (dispatch) => {
  

  try {
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