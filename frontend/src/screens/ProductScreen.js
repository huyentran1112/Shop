import React from 'react';
import data from '../data';
import {Link } from 'react-router-dom';

export default function ProductScreen(props){
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product){
    return <div> Product Not Found</div>
  }
  return(
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