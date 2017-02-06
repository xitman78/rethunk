import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import works from './works'
import comments from './comments'
import posts from './posts'
import modals from './modals'

const rootReducer = combineReducers(
  {
    works: works,
    modals: modals,
    comments: comments,
    posts: posts,
    routing: routerReducer,
  }
);

export default rootReducer;
