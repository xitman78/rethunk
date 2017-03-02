import $http from 'axios'

export function incrementComment(id) {
  return {
    type: 'INCREMENT_COMMENT',
    id
  };
}

export function selectBounce(bounce) {
  return {
    type: 'BOUNCE_SELECTED',
    bounce
  }
}

export function fetchPosts() {
  return (dispatch) => {

    dispatch({ type: 'POSTS_FETCHING' });

    const req = $http.get('https://jsonplaceholder.typicode.com/posts');

    req.then(({data}) => {
      setTimeout(function(){
        dispatch({ type: 'POSTS_FETCHED', payload: data});
      }, 1000);
    })

  };
}

export function draggedMoved(x, y) {
  return {
    type: 'DRAGGED_POSITION_CHANGED',
    payload: {x, y}
  };
}
