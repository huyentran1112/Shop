import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
   <div className="grid-container">
      <header class="row">
        <div>
          <Link className="brand" to="index.html">Sweet Nothings</Link>
        </div>
        <div>
          <Link to="cart.html">Cart</Link>
          {cartItems .length > 0 && (
            <span className="badge">cartItems.length</span>
          )}
          <Link to="signin.html">Sign In</Link>
        </div>
      </header>

      <main>
      <Route path="/cart/id:?" component={CartScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen} exact></Route>
      </main>
      
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
