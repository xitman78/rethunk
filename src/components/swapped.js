import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import { fireAlert, fireSnackbar, closeAlert } from '../actions/modalsActions'

class Swapped extends Component {

  render() {
      return (
        <Chip>
        <Avatar size={32}>A</Avatar>
          Child Component
        </Chip>
      );
  }

}


export default connect(
  state => ({ }),
  { fireAlert, fireSnackbar }
)(Swapped);
