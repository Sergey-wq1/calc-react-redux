import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/rootReducer';

const storeRoot = createStore(rootReducer)
const app = 
  ( <Provider store={storeRoot}>
   <App/>
    </Provider>
  )

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();