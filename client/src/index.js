import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'


import App from './components/App';
import reducer from './reducers';
import rootSaga from './actions/sagas';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Set up saga.
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

sagaMiddleware.run(rootSaga)

// const action = type => store.dispatch({type})

// Render to DOM.
ReactDOM.render(
  <Provider store={store}>
      <App /> 
  </Provider>,
  document.querySelector('#root')
)  

registerServiceWorker();


