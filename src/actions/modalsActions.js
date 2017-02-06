
const modalActions  = {
  fireAlert: function(message) {
    return {
      type: 'MODAL_ALERT_FIRED',
      message
    };
  }
  ,
  closeAlert: function() {
    return {
      type: 'MODAL_ALERT_CLOSED',
    };
  }
}


export default modalActions;
