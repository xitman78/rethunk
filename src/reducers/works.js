

export default function works(state={}, action) {

  console.log(state, action);

  switch(action.type) {

    case 'CURRENT_WORK_CHANGED':
      {
        let newState = {...state};
        newState.currentWork = action.id;
        return newState;
      }

    case 'WORKS_FETCHED':
      {
        let newState = {...state};
        newState.works = action.payload
        if(!newState.works.some(w => w.id == newState.currentWork)) {
          newState.currentWork = newState.works[0].id;
        }
        return newState;
      }
    default:
      return state;
  }

}
