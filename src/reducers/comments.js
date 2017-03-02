
export default function comments(state={}, action) {

  switch(action.type) {

    case 'INCREMENT_COMMENT':
      let index = state.comments.findIndex(cm => cm.id === action.id);
      let stateCopy = {...state, comments: state.comments.slice()};
      if(index !== -1) {
        let comment = {...stateCopy.comments[index]};
        comment.count++;
        stateCopy.comments[index] = comment;
      }
      return stateCopy;

   case 'BOUNCE_SELECTED':

    return {...state, bounce: action.bounce};

    default:
      return state;
  }
}
