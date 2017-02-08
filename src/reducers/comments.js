
export default function comments(state=[], action) {

  switch(action.type) {

    case 'INCREMENT_COMMENT':
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
