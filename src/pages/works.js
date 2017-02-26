import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { fetchWorks, currentWorkChanged, swapChild } from '../actions/worksActions'
import { fireAlert, fireSnackbar, closeAlert } from '../actions/modalsActions'
import './works.sass'

class Works extends Component {

  static propTypes = {
    works: PropTypes.shape({
      works: PropTypes.array.isRequired,
      currentWork: PropTypes.number.isRequired
    }).isRequired,

    fetchWorks: PropTypes.func.isRequired,
    currentWorkChanged: PropTypes.func.isRequired,
    fireAlert: PropTypes.func.isRequired,
    fireSnackbar: PropTypes.func.isRequired,
  }


  componentDidMount() {
    document.title = "Works :: React Magics";
    this.props.fetchWorks();
  }

  handleChange(event, index, value) {
    this.props.currentWorkChanged(value);
  }

  fireAlert() {
    // const myAction = [ <button onClick={this.props.closeAlert}>Hello</button> ];

    this.props.fireAlert({message: 'This is first Material UI alert!', title: 'Hello World!', buttonText: 'Okay', modal: true});
  }

  fireSnackbar() {
    this.props.fireSnackbar({message: 'This is first Material UI SnackBar!', duration: 5000 });
  }

  render() {

    console.log('Render Works');

    const work = this.props.works.works.find(w => w.id === this.props.works.currentWork);

    return (
      <div>
        <h2 className="page-title">Works</h2>
        <div>
        {   <SelectField
            className="works-selector"
            floatingLabelText="Select work"
            value={this.props.works.currentWork}
            onChange={this.handleChange.bind(this)}>
            <MenuItem value={0} primaryText="none" />
            {this.props.works.works.map(work => <MenuItem key={work.id} value={work.id} primaryText={work.title} />)}
          </SelectField>
         }
        </div>
        <RaisedButton label="Click me" secondary={true} onTouchTap={this.fireAlert.bind(this)} style={{marginRight: '16px'}}/>
        <RaisedButton label="Submit" primary={true} onTouchTap={this.fireSnackbar.bind(this)} style={{marginRight: '16px'}}/>
        <RaisedButton label="Swap" onTouchTap={this.props.swapChild} />
        <div className="swapper-container">
          <div className="drop-container">{this.props.works.swapper.left}</div>
          <div className="drop-container">{this.props.works.swapper.right}</div>
        </div>
        <div className="work-details">
        {
          work ? <div>
                  Work details:<br />
                  Title: {work.title}
                </div>
            : ''
        }
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({ works: state.works }),
  { fetchWorks, currentWorkChanged, fireAlert, fireSnackbar, closeAlert, swapChild }
)(Works);
