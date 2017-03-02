import React, { Component } from 'react'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { incrementComment, selectBounce } from '../actions/actionCreator'
import DraggedField from '../components/dragged-field'
import bounce from '../animations/bounce'
import './home.sass'


class Home extends Component {

  componentDidMount() {
    document.title = "React Magics";
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
          <h2 className="page-title">Welcome home</h2>

          <SelectField
            className="works-selector"
            floatingLabelText="Bounce preset"
            value={this.props.comments.bounce}
            onChange={this.bounceChange.bind(this)}>
            {Object.keys(bounce).map(preset => <MenuItem key={preset} value={preset} primaryText={bounce[preset].title} />)}
          </SelectField>

          <ul style={{listStyleType: 'none'}}>
          {
            comments.map(cm => { return (
              <li key={cm.id} className="counter-item">{'Comment ' + cm.id + ' '}
                <button onClick={this.props.incrementComment.bind(null, cm.id)}>+</button>
                {' - ' + cm.count}
              </li>);
            })
          }
          </ul>
          <div className="dragged-field-container">
            <div className="bouncer" id="bouncer" onClick={this.startBounce.bind(this)}></div>
            <DraggedField />
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({ comments: state.comments }),
  { incrementComment, selectBounce }
)(Home);
