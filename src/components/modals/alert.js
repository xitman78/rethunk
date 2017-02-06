import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { mapDispatchToProps } from '../../actions/actionCreator'

class IModalAlert extends React.Component {

  // constructor() {
  //   super();
  //
  // }

  componetWillMount() {

  }

  render() {

    // <RaisedButton label="Alert" onTouchTap={this.handleOpen} />

    //console.log('this.props', this.props);

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.props.closeAlert}
      />
    ];


    return (
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.modals.alert.open}
          onRequestClose={this.props.closeAlert}>
          {this.props.modals.alert.message}
        </Dialog>
    );
  }
}

const ModalAlert = connect(state => ({modals: state.modals}), mapDispatchToProps)(IModalAlert);

export default ModalAlert;

// export default ModalAlert;
