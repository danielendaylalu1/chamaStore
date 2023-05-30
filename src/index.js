import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/store/index';
import { Provider } from 'react-redux';
// import CartModal from './components/cart/CartModal';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.createPortal(<CartModal />, document.getElementById('modal'))
