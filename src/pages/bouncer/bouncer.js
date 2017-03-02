import React, { Component } from 'react'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { selectBounce } from '../../actions/actionCreator'
import bounce from '../../animations/bounce'
import './bouncer.sass'


class Bouncer extends Component {

  componentDidMount() {
    document.title = "Bounce :: React Magics";
  }

  startBounce(ev) {

    let target = ev.target;

    bounce[this.props.comments.bounce].applyTo(target);

  }

  bounceChange(event, index, value) {
    this.props.selectBounce(value);
  }

  render() {

    console.log('Render Home');

    const { comments } = this.props.comments;
    return (
      <div>
          <h2 className="page-title">Reactive Bounces</h2>

          <SelectField
            className="works-selector"
            floatingLabelText="Bounce preset"
            value={this.props.comments.bounce}
            onChange={this.bounceChange.bind(this)}>
            {Object.keys(bounce).map(preset => <MenuItem key={preset} value={preset} primaryText={bounce[preset].title} />)}
          </SelectField>

          <div className="bouncer-container">
            <div className="bouncer" id="bouncer" onClick={this.startBounce.bind(this)}></div>
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({ comments: state.comments }),
  { selectBounce }
)(Bouncer);
