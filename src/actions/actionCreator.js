import $http from 'axios'

import worksActions from './worksActions'

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
  incrementComment,
  fetchPosts,
};


export default actionCreators;
