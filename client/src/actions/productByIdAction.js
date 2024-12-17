/*
import axios from "axios";
import {getProductByIdSuccess,getProductByIdFailure} from "../store/productsReducer";

export const getProductById = (productid) => async (dispatch) => {
    try {
      const response = await axios.post('/api/v1/getproductbyid',{productid});
      dispatch(getProductByIdSuccess(response.data.data || []))
    } catch (error) {
      console.log("Error while getting product by id", error);
      dispatch(getProductByIdFailure());
    }
    
  }
*/