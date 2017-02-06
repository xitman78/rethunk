import { bindActionCreators } from 'redux'
import $http from 'axios'

import worksActions from './worksActions'
import modalActions from './modalsActions'

function incrementComment(id) {
  return {
    type: 'INCREMENT_COMMENT',
    id
  };
}

function fetchPosts() {
  return (dispatch) => {

    dispatch({ type: 'POSTS_FETCHING' });

    const req = $http.get('https://jsonplaceholder.typicode.com/posts');

    req.then(({data}) => {
      console.log('Posts ', data);
      setTimeout(function(){
        dispatch({ type: 'POSTS_FETCHED', payload: data});
      }, 1000);
    })

  };
}

const actionCreators = {
  ...worksActions,
  ...modalActions,
  incrementComment,
  fetchPosts,
};


export default actionCreators;

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
