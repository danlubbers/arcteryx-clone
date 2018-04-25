import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// import HashRouter for routing capabilities
import {HashRouter} from 'react-router-dom';
// This import allows APP to have access to the store and the reducers.
import store from './ducks/store';
// The Provider will 'provide' the store to the APP.
import {Provider} from 'react-redux';
 
ReactDOM.render(
// Give the Provider component a store prop that equals {store}
// Wrap HashRouter around the app making Hash the root component
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
, document.getElementById('root'));
// registerServiceWorker();
