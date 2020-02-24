import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import cart from "./cartSlice";
import * as serviceWorker from './serviceWorker';

const store = configureStore({
    reducer: {
        cart
    }
})



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
