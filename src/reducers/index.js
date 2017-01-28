import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import works from './works'
import comments from './comments'
import posts from './posts'

console.log('works', works);

const rootReducer = combineReducers(
  {
    works: works,
    comments: comments,
    posts: posts,
    routing: routerReducer
  }
);

export default rootReducer;
