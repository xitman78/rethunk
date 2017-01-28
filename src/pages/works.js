import React, { Component } from 'react'

class Works extends Component {

  constructor() {
      super();
      this.name = "Hello"
      this.state = { value: ''};
  }

  // handleChange = (event) => {
  //   this.setState({
  //     value: event.target.value,
  //   });
  // }
  //
  // submitForm = (event) => {
  //   console.log('submitForm', this.state);
  //   this.setState({value: ''});
  // }

  render() {
    return (
      <div>
        <h1>Works</h1>
      </div>
    );
  }
}

export default Works;
