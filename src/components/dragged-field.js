import React, { Component } from 'react'
import './dragged-field.sass'
import Dragged from './dragged'

class DraggedField extends Component {

  render() {
      return (
        <div className="dragged-field">
          <Dragged />
        </div>
      );
  }

}

export default DraggedField;
