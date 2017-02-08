import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { closeAlert } from '../../actions/modalsActions'

class ModalAlert extends React.Component {

  render() {

    const actions = [
      <FlatButton
        label={this.props.modals.alert.buttonText || 'Close'}
        secondary={true}
        keyboardFocused={true}
        onTouchTap={this.props.closeAlert}
      />
    ];

    return (
        <Dialog
          actions={actions}
          modal={this.props.modals.alert.modal || false}
          title={this.props.modals.alert.title}
          open={this.props.modals.alert.open}
          onRequestClose={this.props.closeAlert}>
          {this.props.modals.alert.message}
        </Dialog>
    );
  }
}

export default connect(state => ({modals: state.modals}), { closeAlert })(ModalAlert);
