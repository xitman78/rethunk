import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

import { makeSelectLocationState } from './selectors'

// import root reducers

import rootReducer from './reducers/index'

export default function configureStore(history) {

  const defaultState = {
    works: {
      currentWork: 0,
      works: [],
      swapper: {
        left: true,
      }
    },
    modals: {
      alert: { open: false },
      snackbar: { open: false },
    },
    comments: {
      bounce: 'jelly',
        comments: [
          {id: 4, count: 0},
          {id: 5, count: 0},
          {id: 6, count: 0}
        ],
    },
    posts: { posts:[] },
    dragged: { x: 50, y: 50}
  };

  const myMiddle = store => next => action => {
    // console.log('Action fired', action);
    next(action);
  };

  const enhancers = compose(
    applyMiddleware(thunk, /*myMiddle,*/ routerMiddleware(history)),

    // window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, fromJS(defaultState) , enhancers);

  // export const history = syncHistoryWithStore(browserHistory, store);
  // const history = syncHistoryWithStore(history, store, {
  //   selectLocationState: makeSelectLocationState(),
  // });

  return store;

};
