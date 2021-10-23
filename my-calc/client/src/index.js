import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reportWebVitals from './reportWebVitals'
import App from './App'
import rootReducer from './redux/rootReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const storeRoot = createStore(rootReducer, composedEnhancer)
const app = (
  <Provider store={storeRoot}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
reportWebVitals()
