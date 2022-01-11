import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

//renders a React element into the DOM in the supplied container and return a reference to the component 
ReactDOM.render(
  // Provider sends the store to the App compoentn
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode></Provider>,
  //the element that exists in the original HTML that all of the React contents go into
  document.getElementById('root')
);
