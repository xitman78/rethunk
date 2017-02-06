export default function modals(state = {}, action) {

  switch(action.type) {
    case 'MODAL_ALERT_FIRED':
      return {
        ...state,
        alert: {
          open: true,
          message: action.message
        } };
    case 'MODAL_ALERT_CLOSED':
      return {
        ...state,
        alert: {
          open: false
        }
      };
    default:
      return state;
  }

}
