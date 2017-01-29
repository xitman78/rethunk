import React, { Component } from 'react'

class Works extends Component {

  componentDidMount() {
    document.title = "Works :: React Magics";
    this.props.fetchWorks();
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
        <hr />
        {this.props.works.map(work => <p key={work.id}>{work.title}</p>)}
      </div>
    );
  }
}

export default Works;
