import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

//updates the cart with the products from the local storage
const initialState = {
  cart: {
    //localStorage object stores the data with no expiration date, cartItems is from the cartAction file
    cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : [],
  }
};

// combineReducers is a function that combines all the files from the reducers folder
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// createStore is a function to save the values of the reducer in a store
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))
);

export default store;