import React, { Component }  from 'react'
import './font-face.sass'

export default class MainHeader extends Component {


  render() {

    console.log('Render Header');

    return (
      <h1 className="main-brand">
      3D Reactor
      </h1>
    );
  }
}
