import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import { saveAuthState, loadAuthState, saveCartState, loadCartState } from './utils/LocalStorage'

const reducers = combineReducers({
  auth: authReducer, 
  cart: cartReducer
})

const store = createStore(reducers, {auth: loadAuthState(), cart: loadCartState()})

store.subscribe(()=>{
  saveAuthState(store.getState().auth)
  saveCartState(store.getState().cart)
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
