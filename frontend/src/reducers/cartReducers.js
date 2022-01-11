import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

// updates the store based on actions type
export const cartReducer =  (state = {cartItems:[]}, action) => { 
  switch(action.type) {
    // if the case is cart_add_item (based from the dispatch json file), then the this item will be added to the cart state
    case CART_ADD_ITEM:
      const item = action.payload;
      // checks if the item added is existing in the current cart state
      const existItem = state.cartItems.find(x => x.product === item.product);
      if(existItem){
        console.log(state.cartItems)
        return {
          ...state,
          // if the product is already existing, it maps through the list, and if the item matches the product, quantity will be updated, if  not, the quantity remains the same
          cartItems: state.cartItems.map(x => x.product === existItem.product? item: x )
        }
      } else {
        // if the item (type) is not yet existing, then add the new item to the cart list
        return {...state, cartItems: [...state.cartItems, item]};
      }
      // this item will be deleted from the cart items list
      case CART_REMOVE_ITEM:
        return {...state, cartItems: state.cartItems.filter(x => x.product !== action.payload ),};
    default: 
      return state;
  }
}