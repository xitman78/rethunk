export default function dragged(state = {}, action) {

  switch(action.type) {

    case 'DRAGGED_POSITION_CHANGED':
      return {
          x: action.payload.x,
          y: action.payload.y,
        };

    default:
      return state;

  }
}
