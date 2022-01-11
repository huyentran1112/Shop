import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (productId, qty) => async(dispatch, getState) => {
  const {data} = await Axios.get(`/api/products/${productId}`);
  // dispatch triggers state change, and creates an item based on the data provided by the api route
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  // sets the local storage based on the current state with the newly added item
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

// update the local storage and removes the item from the current cart state
export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId});
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};