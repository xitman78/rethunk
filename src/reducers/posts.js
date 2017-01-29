export default function posts(state = {posts:[]}, action) {

  switch(action.type) {
    case 'POSTS_FETCHING':
      return {fetching: true, posts:state.posts};
    case 'POSTS_FETCHED':
      return {posts:action.payload};
    default:
      return state;
  }

}
