import React, { useEffect } from 'react';

import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

// creates the Home Screen Component
export default function HomeScreen() {
  // initiates the useDispatch method which references the dispatch function from the Redux store
  const dispatch = useDispatch();
  // selects the current product list based from the state
  const productList = useSelector((state) => state.productList);
  // deconstruction of product list into status
  const { loading, error, products } = productList;

  // useEffect identifies if there are changes on the list of products based on a dispatch action
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // if status is loading will show the loading box, error will show messsge box and if not, the list of the product component
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}