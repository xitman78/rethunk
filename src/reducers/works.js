

export default function works(state=[], action) {

  console.log(state, action);

  switch(action.type) {
    case 'WORKS_FETCHED':
      return action.payload;
    default:
      return state;
  }

}
