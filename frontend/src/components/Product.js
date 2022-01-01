import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const {product } = props;
  return (
    <div key={product._id} class="card">
              <Link to={`/product/${product._id}`}>
 
                <img className="medium" src={product.image} alt={product.name} />
              </Link>
              <div className="card-body">
                <Link to={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </Link>
                <div className={product.rating}>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>

  )
}