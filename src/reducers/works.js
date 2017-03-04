import { fromJS } from 'immutable'

const initialState = fromJS({
  currentWork: 0,
  works: [],
  swapper: {
    left: true,
  }
});

export default function works(state = initialState, action) {

  switch(action.type) {

    case 'CURRENT_WORK_CHANGED':
        return state.set('currentWork', action.id);

    case 'WORKS_FETCHED':
      {
        // console.log('WORKS_FETCHED');
        let newState = state.set('works', action.payload);
        let currentWork = state.get('currentWork');
        if(!action.payload.some(w => w.id === currentWork)) {
          newState = newState.set('currentWork', 0); //newState.works[0].id;
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
