import { combineReducers } from 'redux'

function alert(state = {}, action) {

  switch(action.type) {

    case 'MODAL_ALERT_FIRED':
      return {
          open: true,
          ...action.payload,
        };
    case 'MODAL_ALERT_CLOSED':
      return {
          open: false
      };

    default:
      return state;
      
  }
}

function snackbar(state = {}, action) {

  switch(action.type) {

  case 'MODAL_SNACKBAR_FIRED':
    return {
        open: true,
        ...action.payload,
      };

  case 'MODAL_SNACKBAR_CLOSED':
    return {
        open: false
    };

  default:
    return state;

  }
}

export default combineReducers({
  alert,
  snackbar
});
