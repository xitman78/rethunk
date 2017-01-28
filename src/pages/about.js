import React, { Component } from 'react';
//import { Link} from 'react-router';

export default class About extends Component {

  constructor() {
      super();
      this.state = { value: ''};
  }

  navigate() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
          <h1>About</h1>
          <button onClick={this.navigate.bind(this)}>Show props</button>
          <hr />
      </div>
    );
  }
}
