import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './component/App';
import rootReducer from './reducers';

// Curry Function Logger(obj, next,action)
// logger(obj)(next)(action)

const logger = function({dispatch, getState}){
  return function(next){
    return function(action)
    {
      // Middleware code
      console.log('ACTION_TYPE:', action.type);
      next(action);
    }
  }
}


const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store:", store);
// console.log("BEFORE State", store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name:"superman"}]
// });

// console.log("After State", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
