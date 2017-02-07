
export function fireAlert(options) {
  return {
    type: 'MODAL_ALERT_FIRED',
    payload: options
  };
}

export function closeAlert() {
  return {
    type: 'MODAL_ALERT_CLOSED',
  };
}

const modalActions  = {
  fireAlert,
  closeAlert,
}


export default modalActions;
