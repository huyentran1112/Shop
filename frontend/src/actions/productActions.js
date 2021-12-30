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
export const detailsProduct = (productId) => async(dispatch) => {
dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productID});
try {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data}); 
} catch (error) {
  dispatch({
    type: PRODUCT_DETAILS_FAIL,
    payload: error.response && error.response.data.message ? error.response.data.message : error.message,
  })
}
}