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
        <h2 className="page-title">Works</h2>
        <hr />
        <select value={this.props.works.currentWork} onChange={this.handleChange.bind(this)}>
          {this.props.works.works.map(work => <option key={work.id} value={work.id}>{work.title}</option>)}
        </select>
      </div>
    );
  }

  handleChange(event) {
    console.log('handleChange', event);
    this.props.currentWorkChanged(event.target.value);
  }


}

export default Works;
