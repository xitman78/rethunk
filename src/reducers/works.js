

export default function works(state={}, action) {

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
        if(!newState.works.some(w => w.id === newState.currentWork)) {
          newState.currentWork = 0; //newState.works[0].id;
        }
        return newState;
      }

    case 'WORKS_SWAP_CHILD':
    {
      let newSwapper = { left: state.swapper.right, right: state.swapper.left };

      return {...state, swapper: newSwapper };
    }

    case 'WORKS_SWAP_DRAG_STARTED':
      return {...state, dragSourse: action.sourse};

    case 'WORKS_SWAPPED_DROP':
      console.log('state.dragSourse', state.dragSourse);
      if(!state.dragSourse) return state;
      let origin = state.dragSourse; // ? 'right' : 'left';
      if(origin === action.target) return state; // drop in same cell
      let newState =  {...state};
      delete newState.dragSourse;
      newState.swapper[action.target] = newState.swapper[origin];
      newState.swapper[origin] = null;
      return newState;

    default:
      return state;
  }

}
