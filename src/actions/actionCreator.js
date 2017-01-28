import axios from 'axios'

export function likeWork(workId) {
  return {
    type: 'LIKEWORK',
    workId
  };
}

export function incrementComment(id) {
  return {
    type: 'INCREMENT_COMMENT',
    id
  };
}

export function fetchUsers() {
  return (dispatch) => {

    const req = axios.get('https://jsonplaceholder.typicode.com/users');

    req.then(({data}) => {
      console.log('Users ', data);
      dispatch({ type: 'USERS_FETCHED', payload: data});
    })

  };
}

export function fetchPosts() {
  return (dispatch) => {

    const req = axios.get('https://jsonplaceholder.typicode.com/posts');

    req.then(({data}) => {
      console.log('Posts ', data);
      dispatch({ type: 'POSTS_FETCHED', payload: data});
    })

  };
}
