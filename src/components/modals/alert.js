import React from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
// import RaisedButton from 'material-ui/RaisedButton'
import { closeAlert } from '../../actions/modalsActions'

class ModalAlert extends React.Component {

  render() {

    console.log('Render Alert');

    const actions = [
      <FlatButton
        label={this.props.alert.buttonText || 'Close'}
        secondary={true}
        keyboardFocused={true}
        onTouchTap={this.props.closeAlert}
      />
    ];

    return (
        <Dialog
          actions={this.props.alert.actions || actions}
          modal={this.props.alert.modal || false}
          title={this.props.alert.title}
          open={this.props.alert.open}
          onRequestClose={this.props.closeAlert}>
          {this.props.alert.message}
        </Dialog>
    );
  }
}

export default connect(state => ({alert: state.modals.alert}), { closeAlert })(ModalAlert);
