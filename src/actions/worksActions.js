import $http from 'axios'

function likeWork(workId) {
  return {
    type: 'LIKEWORK',
    workId
  };
}

function currentWorkChanged(workId) {

  return {
    type: 'CURRENT_WORK_CHANGED',
    id: workId,
  };
}

function fetchWorks() {
  return (dispatch) => {

    const req = $http.get('http://react.3dtree.net/static/data/works.json');

    req.then(({data}) => {
      console.log('Works ', data);
      dispatch({ type: 'WORKS_FETCHED', payload: data});
    }).catch(err => {
      console.error('Error fetching works', err);
      dispatch({ type: 'WORKS_FETCH_ERROR', payload: err});
    })

  };
}

const worksActions = {
  likeWork,
  currentWorkChanged,
  fetchWorks
}

export default worksActions;
