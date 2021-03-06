

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

    case 'WORKS_SWAPPED_DROP':
      // console.log('WORKS_SWAPPED_DROP', action);
      if(action.sourse === action.target) return state;
      let newState =  {...state};
      newState.swapper[action.target] = newState.swapper[action.sourse];
      delete newState.swapper[action.sourse];
      return newState;

    default:
      return state;
  }

}
