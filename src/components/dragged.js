import React, { Component } from 'react'
import './dragged.sass'

class Dragged extends Component {

  componentWillMount() {
    this.setState({x: 50, y: 50});
  }

  startDragging(event) {

    if(this.state.dragStarted) {
      console.log('Drag already started');
      return;
    }

    let ov = event.nativeEvent;

    this.setState({...this.state, dragStarted: true, lastX: ov.pageX, lastY: ov.pageY });

    let moveHandler = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      if(this.state.dragStarted) {
        let offsetX = this.state.lastX - ev.pageX;
        let offsetY = this.state.lastY - ev.pageY;
        this.setState({dragStarted: true, x: (this.state.x - offsetX), y: (this.state.y - offsetY), lastX: ev.pageX, lastY: ev.pageY });
      }
   };

   let upHandler = (ev) => {
     ev.preventDefault();
     ev.stopPropagation();
     if(this.state.dragStarted) {
       let offsetX = this.state.lastX - ev.pageX;
       let offsetY = this.state.lastY - ev.pageY;
       this.setState({dragStarted: false, x: (this.state.x - offsetX), y: (this.state.y - offsetY) });
       window.removeEventListener('mousemove', moveHandler);
       window.removeEventListener('mouseup', upHandler);
     }
   };

   window.addEventListener('mousemove', moveHandler);
   window.addEventListener('mouseup', upHandler);

  }

  render() {
      return (
        <div className="dragged-element"
          style={{left: this.state.x, top: this.state.y}}
          onMouseDown={this.startDragging.bind(this)}></div>
      );
  }

}

export default Dragged;
