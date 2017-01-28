import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import works from './works'
import comments from './comments'

const rootReducer = combineReducers(
  {
    works: works,
    comments: comments,
    routing: routerReducer
    }
);

export default rootReducer;
