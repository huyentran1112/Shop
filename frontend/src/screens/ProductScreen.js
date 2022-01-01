import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from "../components/Rating";

export default function ProductScreen(props){
const dispatch = useDispatch();
const productId = props.match.params.id;
const [qty, setQty] = useState(1)
const productDetails = useSelector (state => state.productDetails);
const { loading, error, product } = productDetails;

useEffect(() => {
  dispatch(detailsProduct());
}, [dispatch, productId, qty]);
const removeFromCartHandler = (id) => {
  
}

const addToCartHandler = () => {
  props.history.push(`/cart/${productId}?qty={qty}`);
}
  return(
    <div>
  {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) :  (
    <div>
      <Link to="/">Back to Result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={`.${product.image}`}alt={product.name}></img>
        </div>
        <div className="col-1">
        <ul>
        <li>
        <h1>{product.name}</h1>
        <li>Price: ${product.price}</li>
        </li>
        <li>
        <div className="row">
        <div>Status</div>
        <div>
        {product.countInStock > 0 ? (
          <span className="success">In Stock</span>
        ) : (
          <span className="danger" >Unavailable</span>
        )}
        </div>
        </div>
        </li>
        {
          product.countInStock > 0 && (
            <>
            <li>
            <div className="row"> Qty</div>
            <div>
              <select value={qty} onChange={e => setQty(e.target.value)}>
              {
                [...Array(product.countInStock).keys()].map( 
                  x => (
                    <option key={x+1} value={x+1}>{x+1}></option>
                  )
                )
              }
              </select>
            </div>
            <div> ${item.price}</div>
            <div>
              <button type="button" onClick={() => removeFromCartHandler(item.product)}>
              Delete
              </button>
            </div>
            </li>
            <li>
              <button onClick={addToCardHandler} className="primary block"> Add to Cart</button>
            </li>
            </>
          )
         }
        </ul>
        </div>
      </div>
    </div>
  )
}
</div>
)}
