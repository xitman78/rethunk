import $http from 'axios'

export function currentWorkChanged(workId) {

  return {
    type: 'CURRENT_WORK_CHANGED',
    id: workId,
  };
}

export function fetchWorks() {
  return (dispatch) => {

    const req = $http.get('http://react.3dtree.net/static/data/works.json');

    req.then(({data}) => {
      //console.log('Works ', data);
      dispatch({ type: 'WORKS_FETCHED', payload: data});
    }).catch(err => {
      //console.error('Error fetching works', err);
      dispatch({ type: 'WORKS_FETCH_ERROR', payload: err});
    })

  };
}

const worksActions = {
  currentWorkChanged,
  fetchWorks
}

export default worksActions;
