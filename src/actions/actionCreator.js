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

export function fetchWorks() {
  return (dispatch) => {

    const req = axios.get('http://react.3dtree.net/static/data/works.json');

    req.then(({data}) => {
      //console.log('Works ', res);
      //let res = JSON.parse(data);
      console.log('Works ', data);
      dispatch({ type: 'WORKS_FETCHED', payload: data});
    }).catch(err => {
      console.error('Error fetching works', err);
    })

  };
}

export function fetchPosts() {
  return (dispatch) => {

    dispatch({ type: 'POSTS_FETCHING' });

    const req = axios.get('https://jsonplaceholder.typicode.com/posts');

    req.then(({data}) => {
      console.log('Posts ', data);
      setTimeout(function(){
        dispatch({ type: 'POSTS_FETCHED', payload: data});
      }, 1000);
    })

  };
}
