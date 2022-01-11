import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstants';

// updates the store based on actions type based on the product list actions / status
export const productListReducer = (state = {loading: true, products: []}, action) => {
  switch(action.type){
    case PRODUCT_LIST_REQUEST:
      return {loading: true};
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload};
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload}
    default: 
      return state;
  }
};

// updates the store based on actions type based on the product details actions / status
export const productDetailsReducer = (state = { product:{}, loading: true}, action) => {
  switch(action.type){
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload};
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}