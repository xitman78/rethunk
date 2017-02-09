import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { fetchWorks, currentWorkChanged } from '../actions/worksActions'
import { fireAlert } from '../actions/modalsActions'
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
  }


  componentDidMount() {
    document.title = "Works :: React Magics";
    this.props.fetchWorks();
  }

  handleChange(event, index, value) {
    this.props.currentWorkChanged(value);
  }

  fireAlert() {
    this.props.fireAlert({message: 'This is first Material UI alert!', title: 'Hello World!', buttonText: 'Okay', modal: true});
  }

  render() {

    console.log('Render Works');

     const work = this.props.works.works.find(w => w.id === this.props.works.currentWork);

    return (
      <div>
        <h2 className="page-title">Works</h2>
        <hr />
        {   <SelectField
            className="works-selector"
            floatingLabelText="Select work"
            value={this.props.works.currentWork}
            onChange={this.handleChange.bind(this)}>
            <MenuItem value={0} primaryText="none" />
            {this.props.works.works.map(work => <MenuItem key={work.id} value={work.id} primaryText={work.title} />)}
          </SelectField>
         }
        <RaisedButton label="Click me" secondary={true}  onTouchTap={this.fireAlert.bind(this)}/>
        <RaisedButton label="Submit" primary={true} />
        <hr />
        <div>
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
  { fetchWorks, currentWorkChanged, fireAlert }
)(Works);
