
export default function comments(state=[], action) {

  console.log(state, action);

  switch(action.type) {

    case 'INCREMENT_COMMENT':
      console.log('Increment comment count', action);
      let index = state.findIndex(cm => cm.id === action.id);
      let stateCopy = state.slice();
      if(index !== -1) {
        let comment = {...stateCopy[index]};
        comment.count++;
        stateCopy[index] = comment;
      }
      return stateCopy;

    default:
      return state;
  }
}
