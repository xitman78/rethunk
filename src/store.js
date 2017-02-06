import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

// import root reducers

import rootReducer from './reducers/index'


const defaultState = {
  works: { currentWork: 0, works: [] },
  modals: { alert: { open: false } },
  comments: [ {id: 4, count: 0}, {id: 5, count: 0}, {id: 6, count: 0}],
  posts: { posts:[] },
};

const myMiddle = store => next => action => {
  // console.log('Action fired', action);
  next(action);
};

const enhancers = compose(
  applyMiddleware(thunk, myMiddle),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
