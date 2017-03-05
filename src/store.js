import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

// import root reducers

import rootReducer from './reducers/index'

export default function configureStore(history) {

  const defaultState = fromJS({});

  // const myMiddle = store => next => action => {
  //   // console.log('Action fired', action);
  //   next(action);
  // };

  const enhancers = compose(
    applyMiddleware(thunk, /*myMiddle,*/ routerMiddleware(history)),

    // window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, defaultState , enhancers);

  return store;

};
