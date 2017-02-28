import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import { fireAlert, fireSnackbar, closeAlert } from '../actions/modalsActions'
import { swapDrag } from '../actions/worksActions'
import './swapped.sass'

class Swapped extends Component {

  // constructor() {
  //   super();
  //   console.log('constructor');
  // }
  //
  // componentWillMount() {
  //   console.log('componentWillMount');
  // }
  //
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  draggStart(event) {
    console.log('draggStart', event);
    this.props.swapDrag(this.props.pos);
    event.dataTransfer.setData('text', this.props.pos);
  }

  render() {
      return (
        <Chip draggable="true" onDragStart={this.draggStart.bind(this)} style={{cursor: 'pointer'}}>
        <Avatar size={32}>{this.props.pos === 'left' ? 'A' : 'B'}</Avatar>
          Child in {this.props.pos}
        </Chip>
      );
  }

}


export default connect(
  state => ({ }),
  { fireAlert, fireSnackbar, swapDrag }
)(Swapped);
