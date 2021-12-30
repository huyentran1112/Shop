import React from 'react';
import { useSelector } from 'react-redux';
import {Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from "../components/Rating";

export default function ProductScreen(props){
const dispatch = useDispatch();
const productId = props.match.params.id;
const productDetails = useSelector (state => state.productDetails);
const { loading, error, product } = productDetails;

useEffect(() => {
  dispatch(detailsProduct());
}, [dispatch, productId]);
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
        </ul>
        </div>
      </div>
    </div>
  )
}
</div>
)}
