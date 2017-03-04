import { fromJS } from 'immutable'

const initialState = fromJS({
  bounce: 'jelly',
  comments: [
    {id: 4, count: 0},
    {id: 5, count: 0},
    {id: 6, count: 0}
  ],
});

export default function comments(state = initialState, action) {

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

    return state.set('bounce', action.bounce);

    default:
      return state;
  }
}
