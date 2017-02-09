import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import { closeSnackbar } from '../../actions/modalsActions'

class MySnackbar extends Component {

  render() {

      let { snackbar, closeSnackbar } = this.props;

      return (<Snackbar
        open={ snackbar.open || false }
        message={ snackbar.message || 'Undefined' }
        autoHideDuration={ snackbar.duration || 4000 }
        onRequestClose={ closeSnackbar }
        action="close"
        onActionTouchTap={closeSnackbar}
      />);
  }
}

export default connect(
  state => ({snackbar: state.modals.snackbar}),
  { closeSnackbar }
)(MySnackbar);
