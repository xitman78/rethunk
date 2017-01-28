import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import root reducers

import rootReducer from './reducers/index'


const defaultState = {
  works: [ {id: 1, likes: 0}, {id: 2, likes: 0}, {id: 3, likes: 0}],
  comments: [ {id: 4, count: 0}, {id: 5, count: 0}, {id: 6, count: 0}]
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
