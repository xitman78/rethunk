import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reformReducer } from 'redux-form'

import works from './works'
import comments from './comments'
import posts from './posts'
import modals from './modals'
import dragged from './dragged'

const rootReducer = combineReducers(
  {
    works: works,
    modals: modals,
    comments: comments,
    posts: posts,
    routing: routerReducer,
    dragged: dragged,
    form: reformReducer
  }
);

export default rootReducer;
