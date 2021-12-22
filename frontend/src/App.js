import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
   <div className="grid-container">
      <header class="row">
        <div>
          <a className="brand" href="index.html">Sweet Nothings</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>

      <main>
      <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen} exact></Route>
      </main>
      
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;