export default function posts(state = [], action) {

  switch(action.type) {
    case 'POSTS_FETCHED':
      return action.payload;
    default:
      return state;
  }

}
