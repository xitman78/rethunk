import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ModalAlert from '../components/modals/alert'
import { mapDispatchToProps } from '../actions/actionCreator'
import './works.sass'

class Works extends Component {

  componentDidMount() {
    document.title = "Works :: React Magics";
    this.props.fetchWorks();
  }

  handleChange(event, index, value) {
    console.log('handleChange', value);
    //console.log('this.state', this.state);
    this.props.currentWorkChanged(value);
  }

  fireAlert() {
    this.props.fireAlert('This is first Material UI alert!');
  }

  render() {

     const work = null; this.props.works.works.find(w => w.id == this.props.works.currentWork);

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


function mapStateToProps(state) {
  return {
    works: state.works,
    //modals: state.modals,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Works);
