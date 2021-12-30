import Axios from 'axios';
import { PRODUCT_LIST_REQUESt } from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  dispatch ({
    type: PRODUCT_LIST_REQUEST
  });
  try {
      const {data} = await Axios.get('/api/products');
      dispatch({type: PRODUCT_LIST_SUCESS, payload: data})
  } catch(error) {
    dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
  }
};